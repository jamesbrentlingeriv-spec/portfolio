import { Node, Graphics, Color } from 'cc';
import { ParticlePool } from '../systems/ParticleSystem';

export class EffectSystem {
    private gameLayer: Node;
    private exhaustPool: ParticlePool;
    private explosionPool: ParticlePool;
    private flashGfx: Graphics;
    private flashAlpha = 0;
    private shakeTime = 0;
    private shakeIntensity = 0;

    constructor(gameLayer: Node, uiLayer: Node) {
        this.gameLayer = gameLayer;
        this.exhaustPool = new ParticlePool(gameLayer);
        this.explosionPool = new ParticlePool(gameLayer);
        const flashNode = new Node('flash');
        uiLayer.addChild(flashNode);
        this.flashGfx = flashNode.addComponent(Graphics);
    }

    triggerShake(intensity: number, duration: number) {
        this.shakeIntensity = intensity;
        this.shakeTime = duration;
    }

    triggerFlash() {
        this.flashAlpha = 0.4;
    }

    emitExhaust(x: number, y: number, moving: boolean) {
        const spd = moving ? 250 : 120;
        const extra = moving ? 55 : 0;
        const count = moving ? 4 : 2;
        for (let i = 0; i < count; i++) {
            this.exhaustPool.emit(x - 26 + 4 * Math.random(), y + 12 + 6 * (Math.random() - 0.5),
                -spd - 80 * Math.random(), 40 * (Math.random() - 0.5),
                0.2 + 0.15 * Math.random(), 3 + 3 * Math.random(), 50 + extra, 150 + Math.floor(105 * Math.random()), 255);
            this.exhaustPool.emit(x - 26 + 4 * Math.random(), y - 12 + 6 * (Math.random() - 0.5),
                -spd - 80 * Math.random(), 40 * (Math.random() - 0.5),
                0.2 + 0.15 * Math.random(), 3 + 3 * Math.random(), 50 + extra, 150 + Math.floor(105 * Math.random()), 255);
        }
    }

    emitBulletTrail(x: number, y: number) {
        this.exhaustPool.emit(x - 10, y, -100, 10 * (Math.random() - 0.5), 0.15, 1.5, 0, 255, 255);
    }

    emitHitSparks(x: number, y: number) {
        for (let k = 0; k < 6; k++)
            this.explosionPool.emit(x, y, 400 * (Math.random() - 0.5), 400 * (Math.random() - 0.5), 0.1, 2.5, 100, 255, 255);
    }

    explode(x: number, y: number) {
        for (let i = 0; i < 20; i++) {
            const a = Math.random() * Math.PI * 2, spd = 80 + 200 * Math.random();
            this.explosionPool.emit(x, y, Math.cos(a) * spd, Math.sin(a) * spd,
                0.3 + 0.4 * Math.random(), 2 + 3 * Math.random(),
                255, Math.floor(100 + 100 * Math.random()), Math.floor(50 * Math.random()));
        }
        // 爆炸闪光：用粒子池发射一个大粒子代替，不创建持久节点
        this.explosionPool.emit(x, y, 0, 0, 0.12, 35, 255, 180, 0);
    }

    update(dt: number, W: number, H: number) {
        this.exhaustPool.update(dt);
        this.explosionPool.update(dt);

        if (this.flashAlpha > 0) {
            this.flashAlpha -= 2.5 * dt;
            if (this.flashAlpha < 0) this.flashAlpha = 0;
            const fg = this.flashGfx; fg.clear();
            fg.fillColor = new Color(255, 0, 0, Math.floor(255 * this.flashAlpha));
            fg.rect(-W / 2, -H / 2, W, H); fg.fill();
        }

        if (this.shakeTime > 0) {
            this.shakeTime -= dt;
            this.gameLayer.setPosition(
                (Math.random() - 0.5) * this.shakeIntensity * 2,
                (Math.random() - 0.5) * this.shakeIntensity * 2, 0);
            this.shakeIntensity *= 0.92;
        } else {
            this.gameLayer.setPosition(0, 0, 0);
        }
    }
}
