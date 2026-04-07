# 项目信息

- **分辨率**: 1280 × 720 (横屏)
- **方向**: 横屏 (landscape)
- **引擎**: Cocos Creator 3.x
- **渲染**: 纯代码，零图片资源 — 所有绘制通过 `Graphics`

## 项目结构

这是一个通用的 Cocos Creator 项目模板，包含可复用的工具集。

### 目录说明

```
assets/scripts/
├── toolkit/              # 通用工具集（核心）
│   ├── input/           # 输入控制
│   │   └── Joystick.ts  # 浮动虚拟摇杆
│   ├── systems/         # 游戏系统
│   │   ├── EffectSystem.ts    # 特效系统（震动、闪烁）
│   │   └── ParticleSystem.ts  # 粒子系统
│   ├── utils/           # 实用工具
│   │   ├── SoundManager.ts    # 程序化声音生成
│   │   └── Trans.ts           # 多语言工具
│   └── README.md        # 工具集详细文档
├── examples/            # 使用示例
│   └── JoystickExample.ts  # 摇杆示例
├── Main.ts              # 主入口组件（空白模板）
├── types/               # TypeScript 类型定义
│   └── wechat.d.ts      # 微信小游戏类型
└── _archived_game/      # 原打飞机游戏代码（已归档）
```

## 工具集特点

### 1. Joystick（虚拟摇杆）

**特点**:
- 浮动摇杆：触摸点作为中心，避免坐标系转换问题
- 自动归一化方向向量
- 可动态启用/禁用
- 纯 Graphics 绘制，零资源依赖

**关键技术**:
- 使用 UI 坐标系统一处理触摸和中心点
- 避免 Canvas 局部坐标和 UI 坐标混用导致的偏移问题
- 详见 `toolkit/input/Joystick.ts` 注释

### 2. EffectSystem（特效系统）

**功能**:
- 屏幕震动效果
- 屏幕闪烁效果
- 可扩展其他视觉特效

### 3. SoundManager（声音管理）

**功能**:
- 程序化生成音效（无需音频文件）
- 预设多种音效类型
- 基于 Web Audio API

### 4. 其他工具

- ParticleSystem: 简单粒子效果
- Trans: 多语言翻译工具

## 使用方法

### 快速开始

1. 在场景中创建 Canvas 节点
2. 添加 `Main.ts` 组件到 Canvas
3. 根据需要导入 toolkit 中的工具
4. 开始开发你的游戏

### 示例代码

查看 `examples/JoystickExample.ts` 了解如何使用虚拟摇杆。

## 构建配置

### 微信小游戏

项目已配置好构建模板：

**位置**: `build-templates/wechatgame/`

**文件**:
1. `game.json` - 强制横屏
```json
{
  "deviceOrientation": "landscape"
}
```

2. `project.config.json` - 修复 libVersion 错误
```json
{
  "libVersion": "widelyUsed"
}
```

**工作原理**:
- Cocos Creator 自动合并这些 JSON 文件到构建输出
- 只需指定要覆盖的字段
- 每次构建自动应用

### 包体积优化

**问题**: 默认构建可能超过 4M

**解决方案**:
1. 构建面板启用 **分离引擎** (Separate Engine)
2. 项目设置禁用未使用的模块（物理、3D、Spine 等）
3. 详见 `OPTIMIZATION.md`

**预期结果**: 包体积降至 ~500K-1M

## 重要技术要点

### 坐标系统陷阱

**关键问题**: Cocos Creator 有多个不对齐的坐标系

1. **Canvas 局部坐标**: 原点在 Canvas 中心 (0,0)，用于 node.position
2. **UI 坐标 (getUILocation)**: 原点在左下角，触摸事件返回此坐标
3. **世界坐标 (worldPosition)**: 场景全局坐标

**解决方案 - 浮动摇杆方法**:
- 触摸点作为摇杆中心（无预设位置）
- 中心和触摸点都用 UI 坐标存储
- 在同一坐标系内计算偏移
- 避免所有坐标转换问题

**详细说明**: 见原 mem.md 第 43-68 行

### 真机调试问题

**问题**: 微信开发者工具正常，真机报错

**解决方案**:
1. 启用 **分离引擎** (推荐) ⭐
2. 升级 Cocos Creator 到 3.8.3+
3. 清理重建（删除 build/, library/, temp/）

详见原 mem.md 第 116-145 行

### H5 构建错误

**问题**: `System is not defined`

**解决方案**:
- 构建面板设置 Debug Mode 为 **Release**
- 确保 Module Format 为 **System**

详见原 mem.md 第 147-168 行

## Git 工作流

项目已初始化 git 仓库，建议每次重要修改后提交：

```bash
git add -A
git commit -m "描述你的修改"
```

## 历史

本项目从打飞机游戏重构而来，原游戏代码已移至 `_archived_game/` 目录。

查看历史版本：
```bash
git log --oneline
git show <commit-hash>
```

## 下一步

1. 根据需要使用 toolkit 中的工具
2. 在 `assets/scripts/` 下创建你的游戏代码
3. 参考 examples 了解工具用法
4. 定期 git 提交保存进度
