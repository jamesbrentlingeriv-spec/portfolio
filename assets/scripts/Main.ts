import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

/**
 * Main - 项目主入口
 *
 * 这是一个空白的主组件，你可以在这里开始你的游戏开发。
 *
 * 使用方法：
 * 1. 在场景中创建一个 Canvas 节点
 * 2. 添加此组件到 Canvas
 * 3. 开始编写你的游戏逻辑
 *
 * 可用的工具：
 * - Joystick: 虚拟摇杆 (toolkit/input/Joystick.ts)
 * - EffectSystem: 特效系统 (toolkit/systems/EffectSystem.ts)
 * - SoundManager: 声音管理 (toolkit/utils/SoundManager.ts)
 * - 更多工具请查看 toolkit/ 目录
 */
@ccclass('Main')
export class Main extends Component {

    onLoad() {
        console.log('Main component loaded!');
        console.log('开始你的游戏开发吧！');
        console.log('查看 toolkit/ 目录了解可用的工具');
    }

    start() {
        // 初始化代码
    }

    update(deltaTime: number) {
        // 每帧更新
    }
}
