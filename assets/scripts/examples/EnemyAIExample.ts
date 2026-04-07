/**
 * Enemy AI Example - Simple Combat AI
 *
 * This is a reference implementation showing how to create enemy AI with:
 * - Distance-based behavior (chase, attack, retreat)
 * - State machine logic
 * - Combat decision making
 *
 * You can use this as a reference for creating your own AI systems.
 * This file is NOT used by the blank template's Main.ts by default.
 */

import { _decorator, Component, Node, Vec2 } from 'cc';
import { Swordsman, SwordsmanState } from './SwordsmanExample';

const { ccclass, property } = _decorator;

@ccclass('EnemyAI')
export class EnemyAI extends Component {
    private me: Swordsman | null = null;
    public target: Swordsman | null = null;
    private actionTimer: number = 0;

    start() {
        this.me = this.getComponent(Swordsman);
        if (this.me) {
            this.me.isEnemy = true;
        }
    }

    update(dt: number) {
        if (!this.me || !this.target || !this.me.onGround) return;
        if (this.me.isDead || this.target.isDead) return;
        
        let dist = this.target.node.position.x - this.node.position.x;
        let absDist = Math.abs(dist);

        this.actionTimer -= dt;

        // Try to keep a combat distance
        if (absDist > 120) {
            // target too far, walk towards
            this.me.move(dist > 0 ? 1 : -1);
        } else if (absDist < 60) {
            // target too close, back away
            this.me.move(dist > 0 ? -1 : 1);
        } else {
            // In combat range, stop moving to evaluate attacks
            this.me.move(0);

            // Ensure facing target
            if (dist !== 0 && this.me.state !== SwordsmanState.ATTACK) {
                this.node.setScale(dist > 0 ? 1 : -1, 1, 1);
            }

            if (this.actionTimer <= 0) {
                // Determine next action
                if (Math.random() < 0.6) {
                    this.me.attack();
                    this.actionTimer = 1.2 + Math.random(); // cooldown
                } else {
                    this.me.squat(true);
                    setTimeout(() => {
                        if (this.me?.isValid) this.me.squat(false);
                    }, 400);
                    this.actionTimer = 0.8;
                }
            }
        }
    }
}