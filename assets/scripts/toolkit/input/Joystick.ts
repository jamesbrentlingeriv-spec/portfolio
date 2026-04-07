import { Node, Graphics, Color, UITransform, Size, EventTouch, Vec2, Vec3 } from 'cc';

/**
 * Joystick — 浮动虚拟摇杆
 *
 * 规则：触摸点作为摇杆中心，所有计算使用全局坐标
 *
 * 用法：
 *   const joy = new Joystick(parentNode, radius);
 *   // 每帧读取方向
 *   const dir = joy.getDir(); // Vec2，已归一化，(0,0) 表示未拨动
 *   // 不用时销毁
 *   joy.destroy();
 */
export class Joystick {
    private parent: Node;
    private base: Node;
    private stick: Node;
    private dir: Vec2 = new Vec2(0, 0);
    private touchId = -1;
    private radius: number;
    private centerX = 0; // 摇杆中心的UI坐标
    private centerY = 0;
    private enabled = true; // 是否启用
    // private touchMarker: Node | null = null; // 紫色触摸标记（已禁用）

    constructor(parent: Node, radius = 60) {
        this.radius = radius;
        this.parent = parent;

        // 底盘（初始隐藏）
        this.base = new Node('joyBase');
        parent.addChild(this.base);
        const size = radius * 2 + 40;
        this.base.addComponent(UITransform).setContentSize(new Size(size, size));
        const bg = this.base.addComponent(Graphics);
        bg.fillColor = new Color(255, 255, 255, 30);
        bg.circle(0, 0, radius); bg.fill();
        bg.strokeColor = new Color(255, 255, 255, 60);
        bg.lineWidth = 2; bg.circle(0, 0, radius); bg.stroke();
        this.base.active = false; // 初始隐藏

        // 摇杆头
        this.stick = new Node('joyStick');
        this.base.addChild(this.stick);
        this.stick.addComponent(UITransform).setContentSize(new Size(radius, radius));
        const sg = this.stick.addComponent(Graphics);
        sg.fillColor = new Color(255, 255, 255, 100);
        sg.circle(0, 0, radius * 0.5); sg.fill();
        sg.strokeColor = new Color(255, 255, 255, 150);
        sg.lineWidth = 2; sg.circle(0, 0, radius * 0.5); sg.stroke();

        // 事件绑定在父节点上（全屏监听）
        parent.on(Node.EventType.TOUCH_START,  this._onStart,  this);
        parent.on(Node.EventType.TOUCH_MOVE,   this._onMove,   this);
        parent.on(Node.EventType.TOUCH_END,    this._onEnd,    this);
        parent.on(Node.EventType.TOUCH_CANCEL, this._onEnd,    this);

        // 创建紫色触摸标记（已禁用）
        // this.touchMarker = new Node('touchMarker');
        // parent.addChild(this.touchMarker);
        // const markerG = this.touchMarker.addComponent(Graphics);
        // markerG.fillColor = new Color(200, 0, 255, 255);
        // markerG.circle(0, 0, 8);
        // markerG.fill();
        // markerG.strokeColor = new Color(255, 255, 255, 255);
        // markerG.lineWidth = 2;
        // markerG.circle(0, 0, 8);
        // markerG.stroke();
        // this.touchMarker.active = false;
    }

    private _onStart(e: EventTouch) {
        if (!this.enabled) return; // 禁用时不响应
        if (this.touchId >= 0) return;
        this.touchId = e.getID();

        // 触摸点作为摇杆中心
        const uiLoc = e.getUILocation();
        this.centerX = uiLoc.x;
        this.centerY = uiLoc.y;

        // 显示摇杆，设置到触摸位置
        const parentUIT = this.parent.getComponent(UITransform)!;
        const localPos = new Vec3();
        parentUIT.convertToNodeSpaceAR(new Vec3(uiLoc.x, uiLoc.y, 0), localPos);
        this.base.setPosition(localPos.x, localPos.y, 0);
        this.base.active = true;

        console.log('[JOY] 触摸开始 - 中心UI坐标:', this.centerX, this.centerY);
        console.log('[JOY] 触摸开始 - 中心Canvas局部坐标:', localPos.x, localPos.y);

        // 显示紫色触摸标记在触摸位置（已禁用）
        // if (this.touchMarker) {
        //     this.touchMarker.active = true;
        //     this.touchMarker.setPosition(localPos.x, localPos.y, 0);
        // }

        this._update(e);
    }

    private _onMove(e: EventTouch) {
        if (e.getID() !== this.touchId) return;
        this._update(e);
    }

    private _onEnd(e: EventTouch) {
        if (e.getID() !== this.touchId) return;
        this.touchId = -1;
        this.dir.set(0, 0);
        this.stick.setPosition(0, 0, 0);
        this.base.active = false; // 隐藏摇杆
        // if (this.touchMarker) this.touchMarker.active = false; // 隐藏触摸标记（已禁用）
    }

    private _update(e: EventTouch) {
        // 获取触摸点的UI坐标
        const uiLoc = e.getUILocation();

        // 计算偏移（全局UI坐标系）
        let dx = uiLoc.x - this.centerX;
        let dy = uiLoc.y - this.centerY;
        const mag = Math.sqrt(dx * dx + dy * dy);

        // 限制在摇杆半径内
        if (mag > this.radius) {
            dx = dx / mag * this.radius;
            dy = dy / mag * this.radius;
        }

        // 更新摇杆头位置（相对于底盘的局部坐标）
        this.stick.setPosition(dx, dy, 0);

        // 计算归一化方向
        if (mag > 5) {
            this.dir.set(dx / this.radius, dy / this.radius);
        } else {
            this.dir.set(0, 0);
        }
    }

    /** 返回归一化方向向量，未拨动时为 (0,0) */
    getDir(): Vec2 { return this.dir; }

    /** 启用/禁用摇杆 */
    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
        if (!enabled) {
            // 禁用时重置状态并移除事件监听
            this.touchId = -1;
            this.dir.set(0, 0);
            this.stick.setPosition(0, 0, 0);
            this.base.active = false;
            // if (this.touchMarker) this.touchMarker.active = false;
            // 移除事件监听，避免拦截触摸事件
            this.parent.off(Node.EventType.TOUCH_START,  this._onStart,  this);
            this.parent.off(Node.EventType.TOUCH_MOVE,   this._onMove,   this);
            this.parent.off(Node.EventType.TOUCH_END,    this._onEnd,    this);
            this.parent.off(Node.EventType.TOUCH_CANCEL, this._onEnd,    this);
        } else {
            // 启用时重新绑定事件监听
            this.parent.on(Node.EventType.TOUCH_START,  this._onStart,  this);
            this.parent.on(Node.EventType.TOUCH_MOVE,   this._onMove,   this);
            this.parent.on(Node.EventType.TOUCH_END,    this._onEnd,    this);
            this.parent.on(Node.EventType.TOUCH_CANCEL, this._onEnd,    this);
        }
    }

    /** 销毁摇杆节点 */
    destroy() {
        this.parent.off(Node.EventType.TOUCH_START,  this._onStart,  this);
        this.parent.off(Node.EventType.TOUCH_MOVE,   this._onMove,   this);
        this.parent.off(Node.EventType.TOUCH_END,    this._onEnd,    this);
        this.parent.off(Node.EventType.TOUCH_CANCEL, this._onEnd,    this);
        if (this.base.isValid) this.base.destroy();
        // if (this.touchMarker?.isValid) this.touchMarker.destroy();
    }
}
