import { _decorator, Component, Node, Graphics, Color, UITransform, Size } from 'cc';
const { ccclass } = _decorator;

import { Joystick } from '../toolkit/input/Joystick';

/**
 * JoystickExample - 虚拟摇杆使用示例
 *
 * 演示如何使用 Joystick 工具控制一个简单的方块移动
 */
@ccclass('JoystickExample')
export class JoystickExample extends Component {
    private joystick: Joystick | null = null;
    private player: Node | null = null;
    private speed = 200;

    onLoad() {
        // 创建玩家方块
        this.player = new Node('player');
        this.node.addChild(this.player);

        const size = 40;
        this.player.addComponent(UITransform).setContentSize(new Size(size, size));

        const g = this.player.addComponent(Graphics);
        g.fillColor = new Color(100, 200, 255, 255);
        g.rect(-size/2, -size/2, size, size);
        g.fill();
        g.strokeColor = new Color(255, 255, 255, 255);
        g.lineWidth = 2;
        g.rect(-size/2, -size/2, size, size);
        g.stroke();

        // 创建虚拟摇杆
        this.joystick = new Joystick(this.node, 60);
    }

    update(dt: number) {
        if (!this.joystick || !this.player) return;

        const dir = this.joystick.getDir();

        if (dir.x !== 0 || dir.y !== 0) {
            const pos = this.player.position;
            this.player.setPosition(
                pos.x + dir.x * this.speed * dt,
                pos.y + dir.y * this.speed * dt,
                0
            );
        }
    }

    onDestroy() {
        if (this.joystick) {
            this.joystick.destroy();
        }
    }
}
