/**
 * Enemy Example - Simple Enemy with Graphics Rendering
 *
 * This is a reference implementation showing how to create a simple enemy with:
 * - Procedural rendering using Graphics API
 * - Target tracking and movement
 * - Health system
 * - Death animation
 *
 * You can use this as a reference for creating your own enemy types.
 * This file is NOT used by the blank template's Main.ts by default.
 */

import { _decorator, Component, Node, Graphics, Color, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
    private g: Graphics = null!;
    public target: Node | null = null;
    
    @property
    public speed: number = 80;
    
    public hp: number = 30;
    public maxHp: number = 30;
    public radius: number = 25;

    private flashTime: number = 0;

    onLoad() {
        this.g = this.addComponent(Graphics);
        this.draw();
    }

    takeDamage(amount: number) {
        if (this.flashTime > 0) return;
        this.hp -= amount;
        this.flashTime = 0.2; // 闪现变红
    }

    update(dt: number) {
        if (this.hp <= 0) return;

        if (this.flashTime > 0) {
            this.flashTime -= dt;
        }

        if (this.target) {
            const dir = new Vec3();
            Vec3.subtract(dir, this.target.position, this.node.position);
            dir.z = 0;
            const dist = dir.length();
            if (dist > this.radius) {
                dir.normalize();
                const pos = this.node.position;
                this.node.setPosition(pos.x + dir.x * this.speed * dt, pos.y + dir.y * this.speed * dt, 0);
            }
        }
        
        this.draw();
    }

    private draw() {
        this.g.clear();
        
        const cx = 0;
        const cy = 20; // 居中偏移
        
        const bodyColor = this.flashTime > 0 ? Color.RED : new Color(80, 120, 80);
        const eyeColor = new Color(255, 50, 50);

        // 怪物主体
        this.g.fillColor = bodyColor;
        this.g.circle(cx, cy, 25);
        this.g.fill();

        this.g.fillColor = new Color(50, 80, 50);
        this.g.ellipse(cx, cy - 15, 30, 10);
        this.g.fill();

        // 眼睛
        this.g.fillColor = eyeColor;
        this.g.circle(cx - 10, cy + 5, 4);
        this.g.circle(cx + 10, cy + 5, 4);
        this.g.fill();
        
        // 血条
        const hpPerc = Math.max(0, this.hp / this.maxHp);
        this.g.fillColor = Color.BLACK;
        this.g.fillRect(cx - 20, cy + 35, 40, 6);
        this.g.fillColor = Color.RED;
        this.g.fillRect(cx - 19, cy + 36, 38 * hpPerc, 4);
    }
}