# dsh-skin-galactic-opera

<p align="center">DSH Web GUI 非官方 太空歌剧风 暗色 动态 皮肤插件</p>

<p align="center">
  <a href="#english">English</a> · <a href="#简体中文">简体中文</a>
</p>

---

## English

Unofficial cinematic space-opera dark skin bundle for the DSH Web GUI.

It uses generic sci-fi visual language: deep-space backgrounds, neon HUD chrome, a central black-hole accretion disk, a planet with orbital elements, scanner UI, comet trails, energy beams, subtle starfighter silhouettes, telemetry chrome, and a hyperspace-style send effect.

> This package is not affiliated with, endorsed by, or derived from any specific franchise. It does **not** include or recreate official logos, characters, ship designs, quotes, proprietary names, or protected visual designs.

### Features

- Registers and enables the `galactic-opera` dark theme.
- Overrides DSH Web GUI theme tokens for backgrounds, borders, text, brand colors, state colors, scrollbars, and sidebar surfaces.
- Adds global space-opera styling:
  - deep-space background layers;
  - diagonal hyperspace lanes;
  - hover glow for buttons, inputs, messages, and code blocks;
  - sci-fi text selection and code block glow.
- Adds decorative visual elements:
  - central black-hole accretion disk with subtle infall particles;
  - top-right planet, moon, and elliptical satellite orbit;
  - bottom-left rotating scanner HUD and holographic route map;
  - red, cyan, and gold energy beams;
  - sparse twinkling stars, comets, and generic V-shaped starfighter silhouettes;
  - gold mission-briefing crawl panel.
- Adds interactions:
  - subtle pointer parallax;
  - click energy pulse;
  - scanner target ping projected from the clicked position;
  - automatic hyperspace burst after submitting a new instruction or message;
  - fixed bottom-right telemetry/status HUD panel.
- Uses Shadow DOM for the decorative layer to reduce interference from host application styles.
- Respects `prefers-reduced-motion: reduce` by disabling major animations.

### Compatibility

Recommended DSH version: **`0.1.0-rc.7` or newer**.

Known incompatible versions:

- `0.0.1-rc.1`
- `0.0.1-rc.2`

These early versions of `@deepseek-ai/dsh-client-ui-theme` do not expose `theme.overrideTokens()`, which this skin uses for its token override layer.

Versions from `0.0.1-rc.3` onward include the required theme APIs in static inspection, but DSH releases before `0.1.0-rc.7` are not actively tested by this package. If you are using an older DSH release, upgrade DSH first before reporting skin issues.

### Telemetry panel

When DSH Web exposes bottom status/usage data, the skin keeps the original UI layout in place and mirrors the detected global telemetry into a non-interactive bottom-right HUD panel.

The panel is intended to show a consistent five-line status block:

```text
312 轮 · 8732 步
LLM 2253m42s · 工具调用 972m8s
首 token 平均 10.5s · 58 tok/s
缓存命中 97%
输入 1369M tok · 输出 2.5M tok
```

The skin treats each original pipe-separated bottom-bar segment as a complete information block, so combined items such as `首 token 平均 ... · ... tok/s` and `输入 ... · 输出 ...` remain intact. It also filters nearby message-level timing text and settings/menu text so the panel stays focused on global session telemetry.

### Installation

#### From npm

Recommended for most users:

```powershell
dsh plugin --profile web add dsh-skin-galactic-opera
```

npm package page:

```text
https://www.npmjs.com/package/dsh-skin-galactic-opera
```

#### From GitHub

```powershell
dsh plugin --profile web add https://github.com/xmnathan/dsh-skin-galactic-opera.git
```

#### From a local checkout

From the parent directory of this package:

```powershell
dsh plugin --profile web add ./dsh-skin-galactic-opera
```

Or with an absolute path:

```powershell
dsh plugin --profile web add D:\path\to\dsh-skin-galactic-opera
```

Then refresh the DSH Web GUI, usually available at:

```text
http://127.0.0.1:3080
```

If the browser keeps an older client bundle, use a hard refresh:

```text
Ctrl + F5
```

### Uninstall

```powershell
dsh plugin --profile web remove dsh-skin-galactic-opera
```

Refresh the Web GUI after uninstalling.

### Development

Check browser-side JavaScript syntax:

```powershell
npm run check
```

Preview the npm package contents before publishing:

```powershell
npm run pack:dry
```

Publish to npm:

```powershell
npm publish
```

### Package structure

```text
dsh-skin-galactic-opera/
├─ package.json
├─ cordis.patch.yml
├─ README.md
├─ LICENSE
├─ CHANGELOG.md
└─ lib/
   ├─ index.js
   └─ client.js
```

- `package.json`: package metadata, npm publish settings, DSH bundle declaration, and Web client plugin declaration.
- `cordis.patch.yml`: inserts the `dsh-skin-galactic-opera` client plugin into the Web profile.
- `lib/index.js`: host-side no-op entry.
- `lib/client.js`: browser-side theme, decoration, and interaction implementation.

### License

MIT

<p align="right"><a href="#dsh-skin-galactic-opera">Back to top ↑</a></p>

---

## 简体中文

DSH Web GUI 的非官方电影感太空歌剧暗色皮肤插件。

它使用通用科幻视觉语言：深空背景、霓虹 HUD、中央黑洞吸积盘、行星与轨道元素、扫描器界面、彗星轨迹、能量束、克制的战机剪影、遥测信息面板，以及发送消息时的超空间风格特效。

> 本插件不隶属于、不受认可于、也不派生自任何特定影视或游戏系列。它**不包含也不复刻**任何官方 logo、角色、飞船设计、台词、专有名称或受保护视觉设计。

### 功能特性

- 注册并启用 `galactic-opera` 暗色主题。
- 覆盖 DSH Web GUI 的主题 token，包括背景、边框、文本、品牌色、状态色、滚动条和侧边栏表面。
- 添加全局太空歌剧风格：
  - 深空背景层；
  - 斜向超空间航道；
  - 按钮、输入框、消息和代码块的悬停辉光；
  - 科幻风格文本选中与代码块辉光。
- 添加装饰性视觉元素：
  - 带轻微吸入粒子的中央黑洞吸积盘；
  - 右上角行星、卫星和椭圆卫星轨道；
  - 左下角旋转扫描盘 HUD 和全息路线图；
  - 红、青、金三色能量束；
  - 稀疏闪烁星点、彗星和通用 V 形战机剪影；
  - 金色任务简报滚动面板。
- 添加交互效果：
  - 轻微鼠标视差；
  - 点击能量脉冲；
  - 根据点击位置投影到扫描盘的目标 ping；
  - 提交新指令或消息后的自动超空间爆发；
  - 固定在右下角的 telemetry / 状态 HUD 面板。
- 装饰层使用 Shadow DOM，减少宿主应用样式对行星、扫描盘、点击脉冲等几何形态的污染。
- 遵循 `prefers-reduced-motion: reduce`，会关闭主要动画。

### 兼容性

推荐 DSH 版本：**`0.1.0-rc.7` 或更新版本**。

已知不兼容版本：

- `0.0.1-rc.1`
- `0.0.1-rc.2`

这些早期版本的 `@deepseek-ai/dsh-client-ui-theme` 不提供 `theme.overrideTokens()`，而本皮肤需要它来应用主题 token 覆盖层。

从 `0.0.1-rc.3` 开始，静态检查显示已具备本插件需要的 theme API；但 `0.1.0-rc.7` 之前的 DSH 版本本包不会主动测试。如果你正在使用更早的 DSH 版本，建议先升级 DSH，再反馈皮肤兼容问题。

### Telemetry 面板

当 DSH Web 暴露底部状态/用量信息时，皮肤会保留原始 UI 布局，并将检测到的全局 telemetry 镜像到右下角的非交互 HUD 面板中。

面板目标是稳定显示五行状态信息：

```text
312 轮 · 8732 步
LLM 2253m42s · 工具调用 972m8s
首 token 平均 10.5s · 58 tok/s
缓存命中 97%
输入 1369M tok · 输出 2.5M tok
```

皮肤会把原始底栏中用竖线分隔的每一段都视为完整信息块，因此 `首 token 平均 ... · ... tok/s`、`输入 ... · 输出 ...` 这类组合信息不会被拆散。同时也会过滤附近的单条消息耗时、设置菜单文本等内容，让面板聚焦于全局会话 telemetry。

### 安装

#### 通过 npm 安装

推荐大多数用户使用：

```powershell
dsh plugin --profile web add dsh-skin-galactic-opera
```

npm 包页面：

```text
https://www.npmjs.com/package/dsh-skin-galactic-opera
```

#### 通过 GitHub 安装

```powershell
dsh plugin --profile web add https://github.com/xmnathan/dsh-skin-galactic-opera.git
```

#### 通过本地源码安装

在本包的上级目录执行：

```powershell
dsh plugin --profile web add ./dsh-skin-galactic-opera
```

也可以使用绝对路径：

```powershell
dsh plugin --profile web add D:\path\to\dsh-skin-galactic-opera
```

然后刷新 DSH Web GUI，通常地址为：

```text
http://127.0.0.1:3080
```

如果浏览器仍然缓存旧的客户端 bundle，请使用硬刷新：

```text
Ctrl + F5
```

### 卸载

```powershell
dsh plugin --profile web remove dsh-skin-galactic-opera
```

卸载后刷新 Web GUI。

### 开发

检查浏览器端 JavaScript 语法：

```powershell
npm run check
```

发布前预览 npm 包内容：

```powershell
npm run pack:dry
```

发布到 npm：

```powershell
npm publish
```

### 包结构

```text
dsh-skin-galactic-opera/
├─ package.json
├─ cordis.patch.yml
├─ README.md
├─ LICENSE
├─ CHANGELOG.md
└─ lib/
   ├─ index.js
   └─ client.js
```

- `package.json`：包元数据、npm 发布设置、DSH bundle 声明和 Web client 插件声明。
- `cordis.patch.yml`：将 `dsh-skin-galactic-opera` client 插件插入 Web profile。
- `lib/index.js`：宿主侧空实现入口。
- `lib/client.js`：浏览器侧主题、装饰层和交互实现。

### 许可证

MIT

<p align="right"><a href="#dsh-skin-galactic-opera">返回顶部 ↑</a></p>
