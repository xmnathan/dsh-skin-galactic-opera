# dsh-skin-galactic-opera

Unofficial cinematic space-opera dark skin bundle for the DSH Web GUI.

非官方 DSH Web GUI 太空歌剧暗色皮肤插件。它使用通用科幻视觉语言，包括深空背景、霓虹 HUD、黑洞吸积盘、行星与卫星轨道、流星、V 形战机剪影和提交消息时的超空间跃迁效果。

This package does not include or recreate any official franchise logos, characters, ship designs, quotes, or proprietary names.

本插件不包含也不复刻任何特定影视作品的官方 logo、角色、飞船设计、台词或专有名称。

## Features

- Registers and enables the `galactic-opera` dark theme.
- Overrides DSH Web GUI theme tokens for backgrounds, borders, text, brand colors, state colors, scrollbars, and sidebar surfaces.
- Adds global visual styling for star fields, diagonal hyperspace lanes, hover glow, selection highlight, and code block glow.
- Adds decorative space-opera elements:
  - Central black-hole accretion disk.
  - Top-right planet, one moon, and an elliptical satellite orbit.
  - Bottom-left rotating scanner HUD and holographic route map.
  - Red, cyan, and gold energy beams.
  - Sparse twinkling stars, comets, and generic V-shaped starfighter silhouettes.
  - Gold mission-briefing crawl panel.
- Adds interactions:
  - Subtle mouse parallax.
  - Click energy pulse.
  - Hover energy outlines on buttons, inputs, messages, and code blocks.
  - Bottom telemetry/status information, such as token, usage, round, and step data, is copied into a complete multi-row bottom-right sci-fi panel when detected.
  - Scanner target dot projected from the pointer direction relative to the viewport center; the target lights only when the scanner sweep passes it.
  - Automatic hyperspace burst after submitting a new instruction or message.
- Respects `prefers-reduced-motion: reduce` by disabling major animations.

## Installation

### From npm

Recommended for most users:

```powershell
dsh plugin --profile web add dsh-skin-galactic-opera
```

npm package page:

```text
https://www.npmjs.com/package/dsh-skin-galactic-opera
```

### From GitHub

```powershell
dsh plugin --profile web add https://github.com/xmnathan/dsh-skin-galactic-opera.git
```

### From a local checkout

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

## Uninstall

```powershell
dsh plugin --profile web remove dsh-skin-galactic-opera
```

Refresh the Web GUI after uninstalling.

## Development

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

## Package structure

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

## License

MIT
