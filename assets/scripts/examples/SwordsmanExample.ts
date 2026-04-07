/**
 * Swordsman Example - Procedural Skeletal Animation
 *
 * This is a reference implementation showing how to create a character with:
 * - Procedural skeletal animation using Graphics API
 * - Multiple animation states (IDLE, WALK, JUMP, ATTACK, SQUAT)
 * - Combat system with hit detection
 * - Physics-based movement
 *
 * You can use this as a reference for creating your own characters.
 * This file is NOT used by the blank template's Main.ts by default.
 */

import { _decorator, Component, Graphics, Color, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

export enum SwordsmanState {
    IDLE, WALK, JUMP, ATTACK, SQUAT
}

@ccclass('Swordsman')
export class Swordsman extends Component {
    private gfx: Graphics | null = null;
    public state: SwordsmanState = SwordsmanState.IDLE;
    public frameIndex: number = 0;
    public hasHit: boolean = false;
    private animTimer: number = 0;

    @property
    public isEnemy: boolean = false;

    public hp: number = 100;
    public maxHp: number = 100;
    public isDead: boolean = false;
    private hitTimer: number = 0;

    private vx: number = 0;
    private vy: number = 0;
    public onGround: boolean = true;
    private facingRight: boolean = true;

    // Movement parameters
    @property
    public speed: number = 250;
    @property
    public jumpForce: number = 500;
    @property
    public gravity: number = -1800;
    @property
    public groundY: number = -200;

    onLoad() {
        this.gfx = this.addComponent(Graphics);
    }

    start() {
        this.draw();
    }

    update(dt: number) {
        if (this.hitTimer > 0) this.hitTimer -= dt;

        if (this.hp <= 0 && !this.isDead) {
            this.isDead = true;
            this.node.angle = -90 * Math.sign(this.node.scale.x); // Fall back effect
            this.state = SwordsmanState.SQUAT;
        }

        if (this.isDead) {
            // Only apply gravity if in air
            if (!this.onGround) {
                this.vy += this.gravity * dt;
                let pos = this.node.position;
                this.node.setPosition(pos.x + this.vx * dt, pos.y + this.vy * dt, pos.z);
                if (this.node.position.y <= this.groundY) {
                    this.node.setPosition(pos.x, this.groundY, pos.z);
                    this.vy = 0;
                    this.vx = 0;
                    this.onGround = true;
                }
            }
            this.draw();
            return;
        }

        // --- Physics & Validation ---
        if (!this.onGround) {
            this.vy += this.gravity * dt;
            let pos = this.node.position;
            let nextY = pos.y + this.vy * dt;
            
            if (nextY <= this.groundY) {
                this.node.setPosition(pos.x + this.vx * dt, this.groundY, pos.z);
                this.vy = 0;
                this.onGround = true;
                if (this.state === SwordsmanState.JUMP) {
                    this.state = Math.abs(this.vx) > 0 ? SwordsmanState.WALK : SwordsmanState.IDLE;
                    this.frameIndex = 0;
                }
            } else {
                this.node.setPosition(pos.x + this.vx * dt, nextY, pos.z);
            }
        } else {
            let pos = this.node.position;
            this.node.setPosition(pos.x + this.vx * dt, pos.y, pos.z);
        }

        // --- Animation Data & Frame Timing ---
        this.animTimer += dt;
        let frameRate = 0.1; // 10 fps default
        if (this.state === SwordsmanState.WALK) frameRate = 0.08;
        if (this.state === SwordsmanState.ATTACK) frameRate = 0.06;

        if (this.animTimer >= frameRate) {
            this.animTimer = 0;
            this.frameIndex++;

            if (this.state === SwordsmanState.ATTACK) {
                if (this.frameIndex >= 4) {
                    this.state = this.onGround ? (Math.abs(this.vx) > 0 ? SwordsmanState.WALK : SwordsmanState.IDLE) : SwordsmanState.JUMP;
                    this.frameIndex = 0;
                }
            } else if (this.state === SwordsmanState.JUMP) {
                if (this.frameIndex >= 2) this.frameIndex = 1; // hold last frame
            } else if (this.state === SwordsmanState.SQUAT) {
                if (this.frameIndex >= 1) this.frameIndex = 0;
            } else if (this.state === SwordsmanState.IDLE) {
                if (this.frameIndex >= 4) this.frameIndex = 0;
            } else if (this.state === SwordsmanState.WALK) {
                if (this.frameIndex >= 8) this.frameIndex = 0;
            }
        }

        if (this.state === SwordsmanState.JUMP) {
            this.frameIndex = this.vy > 0 ? 0 : 1; 
        }

        this.draw();
    }

    public move(dir: number) { // -1, 0, 1
        if (this.isDead) return;
        if (this.state === SwordsmanState.ATTACK) return;
        if (this.state === SwordsmanState.SQUAT) return;

        this.vx = dir * this.speed;

        if (dir !== 0) {
            this.facingRight = dir > 0;
            // Native flipping trick via scaling X-axis
            this.node.setScale(this.facingRight ? 1 : -1, 1, 1);
        }

        if (this.onGround) {
            if (dir !== 0 && this.state !== SwordsmanState.WALK) {
                this.state = SwordsmanState.WALK;
                this.frameIndex = 0;
            } else if (dir === 0 && this.state === SwordsmanState.WALK) {
                this.state = SwordsmanState.IDLE;
                this.frameIndex = 0;
            }
        }
    }

    public jump() {
        if (this.isDead) return;
        if (this.onGround && this.state !== SwordsmanState.ATTACK && this.state !== SwordsmanState.SQUAT) {
            this.vy = this.jumpForce;
            this.onGround = false;
            this.state = SwordsmanState.JUMP;
            this.frameIndex = 0;
        }
    }

    public squat(isSquatting: boolean) {
        if (this.isDead) return;
        if (!this.onGround || this.state === SwordsmanState.ATTACK) return;

        if (isSquatting) {
            this.vx = 0;
            this.state = SwordsmanState.SQUAT;
            this.frameIndex = 0;
        } else {
            if (this.state === SwordsmanState.SQUAT) {
                this.state = SwordsmanState.IDLE;
                this.frameIndex = 0;
            }
        }
    }

    public takeDamage(amount: number, pushDir: number) {
        if (this.isDead) return;
        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
        }
        this.hitTimer = 0.15; // Flash effect duration
        
        // Push back
        let pos = this.node.position;
        this.node.setPosition(pos.x + pushDir * 30, pos.y, pos.z);

        // Interrupt attack
        if (this.state === SwordsmanState.ATTACK) {
            this.state = SwordsmanState.IDLE;
            this.frameIndex = 0;
        }
    }

    public attack() {
        if (this.isDead) return;
        if (this.state !== SwordsmanState.ATTACK) {
            this.state = SwordsmanState.ATTACK;
            this.frameIndex = 0;
            this.animTimer = 0;
            this.hasHit = false;
            if (this.onGround) this.vx = 0; // stop horizontal movement on ground
        }
    }

    public getSwordTipPos(): Vec2 | null {
        if (this.state !== SwordsmanState.ATTACK) return null;
        let d = this.getFrameData(this.state, this.frameIndex);
        let radSword = d.aSword * Math.PI / 180;
        let radRArm = d.aRArm * Math.PI / 180;
        let radRForearm = d.aRForearm * Math.PI / 180;

        // Reapply skeleton hierarchical math identical to the draw hook
        let rElbowX = d.shoulder.x + Math.cos(radRArm) * 15;
        let rElbowY = d.shoulder.y + Math.sin(radRArm) * 15;
        let rHandX = rElbowX + Math.cos(radRForearm) * 15;
        let rHandY = rElbowY + Math.sin(radRForearm) * 15;
        let swordTipX = rHandX + Math.cos(radSword) * 45;
        let swordTipY = rHandY + Math.sin(radSword) * 45;

        return new Vec2(
            this.node.position.x + swordTipX * this.node.scale.x,
            this.node.position.y + swordTipY
        );
    }

    private draw() {
        if (!this.gfx) return;
        this.gfx.clear();
        let d = this.getFrameData(this.state, this.frameIndex);

        // Helper func to convert polarized angle back to local coordinates
        const p = (base: Vec2, angleDeg: number, length: number) => {
            let rad = angleDeg * Math.PI / 180;
            return new Vec2(base.x + Math.cos(rad) * length, base.y + Math.sin(rad) * length);
        };

        // Determine critical joints coordinates
        let lKnee = p(d.hip, d.aLThigh, 20);
        let lFoot = p(lKnee, d.aLCalf, 20);
        let rKnee = p(d.hip, d.aRThigh, 20);
        let rFoot = p(rKnee, d.aRCalf, 20);
        let lElbow = p(d.shoulder, d.aLArm, 15);
        let lHand = p(lElbow, d.aLForearm, 15);
        let rElbow = p(d.shoulder, d.aRArm, 15);
        let rHand = p(rElbow, d.aRForearm, 15);
        let swordTip = p(rHand, d.aSword, 45);

        this.gfx.lineWidth = 4;
        this.gfx.lineCap = Graphics.LineCap.ROUND;
        this.gfx.lineJoin = Graphics.LineJoin.ROUND;

        // Draw Left Arm & Leg (Background Elements)
        this.gfx.strokeColor = new Color(150, 150, 150, 255);
        this.gfx.moveTo(d.hip.x, d.hip.y); this.gfx.lineTo(lKnee.x, lKnee.y); this.gfx.lineTo(lFoot.x, lFoot.y); this.gfx.stroke();
        this.gfx.moveTo(d.shoulder.x, d.shoulder.y); this.gfx.lineTo(lElbow.x, lElbow.y); this.gfx.lineTo(lHand.x, lHand.y); this.gfx.stroke();

        let isHit = this.hitTimer > 0;
        let headColor = this.isEnemy ? new Color(255, 100, 100) : Color.WHITE;
        if (isHit) headColor = Color.RED;

        // Draw Torso
        this.gfx.strokeColor = isHit ? Color.RED : Color.WHITE;
        this.gfx.moveTo(d.hip.x, d.hip.y); this.gfx.lineTo(d.shoulder.x, d.shoulder.y); this.gfx.stroke();

        // Draw Head
        this.gfx.fillColor = headColor;
        this.gfx.circle(d.head.x, d.head.y, 8);
        this.gfx.fill();

        // Draw Right Arm & Leg (Foreground Elements)
        this.gfx.strokeColor = isHit ? Color.RED : Color.WHITE;
        this.gfx.moveTo(d.hip.x, d.hip.y); this.gfx.lineTo(rKnee.x, rKnee.y); this.gfx.lineTo(rFoot.x, rFoot.y); this.gfx.stroke();
        this.gfx.moveTo(d.shoulder.x, d.shoulder.y); this.gfx.lineTo(rElbow.x, rElbow.y); this.gfx.lineTo(rHand.x, rHand.y); this.gfx.stroke();

        // Draw Sword
        this.gfx.strokeColor = new Color(0, 255, 255, 255);
        this.gfx.lineWidth = 6;
        this.gfx.moveTo(rHand.x, rHand.y); this.gfx.lineTo(swordTip.x, swordTip.y); this.gfx.stroke();

        // Cool Attack Trail Effect
        if (this.state === SwordsmanState.ATTACK) {
            if (this.frameIndex === 1 || this.frameIndex === 2) {
                this.gfx.strokeColor = new Color(0, 255, 255, 100);
                this.gfx.lineWidth = 15;
                let prevSwordAngle = this.frameIndex === 1 ? 135 : 45;
                let prevSwordBase = p(rHand, prevSwordAngle, 45);
                this.gfx.moveTo(prevSwordBase.x, prevSwordBase.y);
                this.gfx.lineTo(swordTip.x, swordTip.y);
                this.gfx.stroke();
            }
        }
    }

    private getFrameData(state: SwordsmanState, frame: number) {
        let d = {
            hip: new Vec2(0, 40),
            shoulder: new Vec2(0, 70),
            head: new Vec2(0, 85),
            aLThigh: -90, aLCalf: -90, aRThigh: -90, aRCalf: -90,
            aLArm: -90, aLForearm: -90, aRArm: -90, aRForearm: -45, aSword: 45
        };

        switch (state) {
            case SwordsmanState.IDLE: {
                // slightly breathing
                let dy = [0, -1, -2, -1][frame % 4];
                d.hip.y += dy; d.shoulder.y += dy; d.head.y += dy;
                d.aLThigh = -95; d.aRThigh = -85;
                d.aLArm = -80; d.aRArm = -100; d.aRForearm = -60; d.aSword = 30;
                break;
            }
            case SwordsmanState.WALK: {
                let cycle = frame % 8;
                let swing = Math.sin(cycle * Math.PI / 4);
                let swingCos = Math.cos(cycle * Math.PI / 4);

                d.aRThigh = -90 + swing * 30;
                d.aLThigh = -90 - swing * 30;

                // Calves drag backward dynamically when moving legs forward
                d.aRCalf = d.aRThigh - (swing > 0 ? swing * 30 : 0);
                d.aLCalf = d.aLThigh - (swing < 0 ? -swing * 30 : 0);

                d.aRArm = -90 - swing * 20; d.aRForearm = d.aRArm + 30;
                d.aLArm = -90 + swing * 20; d.aLForearm = d.aLArm + 10;
                d.aSword = d.aRForearm + 90;

                d.hip.y = 40 + Math.abs(swingCos) * 3;
                d.shoulder.y = d.hip.y + 30;
                d.head.y = d.shoulder.y + 15;
                break;
            }
            case SwordsmanState.SQUAT: {
                d.hip.set(0, 20); d.shoulder.set(5, 45); d.head.set(10, 58);
                d.aLThigh = -135; d.aLCalf = -45;
                d.aRThigh = -150; d.aRCalf = -30;
                d.aRArm = -45; d.aRForearm = 0; d.aSword = 10;
                break;
            }
            case SwordsmanState.JUMP: {
                if (frame === 0) { // Going up
                    d.aLThigh = -110; d.aLCalf = -90;
                    d.aRThigh = -70; d.aRCalf = -50;
                    d.aRArm = -120; d.aRForearm = -90; d.aSword = 45;
                } else { // Falling Down
                    d.aLThigh = -100; d.aLCalf = -95;
                    d.aRThigh = -80; d.aRCalf = -75;
                    d.aRArm = -60; d.aRForearm = -45; d.aSword = 30;
                }
                break;
            }
            case SwordsmanState.ATTACK: {
                d.aLArm = -120; d.aLForearm = -150;
                if (frame === 0) { // Wind up back
                    d.shoulder.x = -5; d.head.x = -5;
                    d.aRArm = 135; d.aRForearm = 180; d.aSword = 180;
                } else if (frame === 1) { // Forward strike
                    d.shoulder.x = 5; d.head.x = 8;
                    d.aRArm = 45; d.aRForearm = 45; d.aSword = 45;
                } else if (frame === 2) { // Long extension
                    d.shoulder.x = 10; d.head.x = 12;
                    d.aRArm = -10; d.aRForearm = -10; d.aSword = -20;
                } else if (frame === 3) { // Recovery phase
                    d.shoulder.x = 5; d.head.x = 5;
                    d.aRArm = -45; d.aRForearm = -45; d.aSword = -30;
                }
                break;
            }
        }
        return d;
    }
}