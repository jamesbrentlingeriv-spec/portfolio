import { Node, Graphics, Color } from 'cc';
import { W, H } from '../core/GameConstants';

interface Particle {
    x: number; y: number; vx: number; vy: number;
    life: number; maxLife: number; r: number;
    cr: number; cg: number; cb: number;
}

export class ParticlePool {
    node: Node;
    private g: Graphics;
    private particles: Particle[] = [];

    constructor(parent: Node) {
        this.node = new Node('particles');
        parent.addChild(this.node);
        this.g = this.node.addComponent(Graphics);
    }

    emit(x: number, y: number, vx: number, vy: number, life: number, r: number, cr: number, cg: number, cb: number) {
        this.particles.push({ x, y, vx, vy, life, maxLife: life, r, cr, cg, cb });
    }

    update(dt: number) {
        const g = this.g;
        g.clear();
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= dt;
            if (p.life <= 0) { this.particles.splice(i, 1); continue; }
            p.x += p.vx * dt; p.y += p.vy * dt;
            const alpha = Math.floor(p.life / p.maxLife * 255);
            const radius = p.r * (p.life / p.maxLife);
            g.fillColor = new Color(p.cr, p.cg, p.cb, alpha);
            g.circle(p.x, p.y, radius); g.fill();
        }
    }
}
