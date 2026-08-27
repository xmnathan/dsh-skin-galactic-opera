window.__ModuleLoader__.load({
	id: "dsh-skin-galactic-opera",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		const PLUGIN_ID = "dsh-skin-galactic-opera";
		const THEME_ID = "galactic-opera";
		const THEME_LABEL = "Galactic Opera";
		const STYLE_ID = "dsh-skin-galactic-opera-style";
		const DECOR_ID = "dsh-skin-galactic-opera-decor";
		const CSS_TAG_ID = `${PLUGIN_ID}/global.css`;

		const TOKENS = Object.freeze({
			"--dsw-alias-bg-base": "#03040b",
			"--dsw-alias-bg-layer-1": "rgba(7, 11, 28, 0.92)",
			"--dsw-alias-bg-layer-2": "rgba(12, 18, 43, 0.94)",
			"--dsw-alias-bg-overlay": "rgba(5, 8, 24, 0.98)",
			"--dsw-alias-bg-module-platform": "rgba(16, 25, 61, 0.98)",
			"--dsw-alias-border-l1": "rgba(98, 213, 255, 0.38)",
			"--dsw-alias-border-l2": "rgba(255, 207, 92, 0.42)",
			"--dsw-alias-border-l3": "rgba(255, 71, 120, 0.62)",
			"--dsw-alias-brand-primary": "#7de3ff",
			"--dsw-alias-label-primary": "#f8fbff",
			"--dsw-alias-label-secondary": "#b7c3e8",
			"--dsw-alias-label-tertiary": "#8490bb",
			"--dsw-alias-interactive-bg-hover": "rgba(125, 227, 255, 0.16)",
			"--dsw-alias-button-floating-fill": "rgba(9, 14, 36, 0.92)",
			"--dsw-alias-button-floating-hover": "rgba(33, 47, 91, 0.98)",
			"--dsw-alias-scrollbar-bg-l1": "rgba(125, 227, 255, 0.30)",
			"--dsw-alias-scrollbar-hover-l1": "rgba(255, 207, 92, 0.68)",
			"--dsw-alias-scrollbar-bg-l2": "rgba(255, 71, 120, 0.24)",
			"--dsw-alias-scrollbar-hover-l2": "rgba(125, 227, 255, 0.72)",
			"--dsw-alias-state-error-primary": "#ff4778",
			"--dsw-alias-state-success-primary": "#66ffc7",
			"--dsw-alias-state-warn-primary": "#ffcf5c",
			"--dsw-specific-sidebar-fill": "rgba(4, 7, 22, 0.98)"
		});

		const TOKEN_OVERRIDES = Object.freeze(Object.fromEntries(
			Object.entries(TOKENS).map(([name, value]) => [name, { light: value, dark: value }])
		));

		const CSS = `
body.dsh-skin-galactic-opera {
  --dsh-skin-cyan: #7de3ff;
  --dsh-skin-gold: #ffcf5c;
  --dsh-skin-red: #ff4778;
  --dsh-skin-green: #66ffc7;
  --dsh-skin-void: #03040b;
  --dsh-skin-parallax-x: 0px;
  --dsh-skin-parallax-y: 0px;
  --dsh-skin-scanner-dot-x: 18vmin;
  --dsh-skin-scanner-dot-y: calc(100vh - 18vmin);
  --dsw-alias-bg-base: #03040b !important;
  --dsw-alias-bg-layer-1: rgba(7, 11, 28, 0.92) !important;
  --dsw-alias-bg-layer-2: rgba(12, 18, 43, 0.94) !important;
  --dsw-alias-bg-overlay: rgba(5, 8, 24, 0.98) !important;
  --dsw-alias-bg-module-platform: rgba(16, 25, 61, 0.98) !important;
  --dsw-alias-border-l1: rgba(98, 213, 255, 0.42) !important;
  --dsw-alias-border-l2: rgba(255, 207, 92, 0.48) !important;
  --dsw-alias-border-l3: rgba(255, 71, 120, 0.68) !important;
  --dsw-alias-brand-primary: #7de3ff !important;
  --dsw-alias-label-primary: #f8fbff !important;
  --dsw-alias-label-secondary: #b7c3e8 !important;
  --dsw-alias-label-tertiary: #8490bb !important;
  --dsw-alias-interactive-bg-hover: rgba(125, 227, 255, 0.18) !important;
  --dsw-alias-button-floating-fill: rgba(9, 14, 36, 0.94) !important;
  --dsw-alias-button-floating-hover: rgba(33, 47, 91, 0.98) !important;
  --dsw-alias-state-error-primary: #ff4778 !important;
  --dsw-alias-state-success-primary: #66ffc7 !important;
  --dsw-alias-state-warn-primary: #ffcf5c !important;
  --dsw-specific-sidebar-fill: rgba(4, 7, 22, 0.98) !important;
  background-color: #03040b !important;
  background-image:
    radial-gradient(circle at 13% 16%, rgba(125, 227, 255, 0.26), transparent 29rem),
    radial-gradient(circle at 84% 8%, rgba(255, 207, 92, 0.18), transparent 26rem),
    radial-gradient(circle at 62% 83%, rgba(255, 71, 120, 0.20), transparent 34rem),
    radial-gradient(circle at 32% 74%, rgba(102, 255, 199, 0.10), transparent 28rem),
    linear-gradient(180deg, #02030a 0%, #03040b 44%, #080b1c 100%) !important;
}

body.dsh-skin-galactic-opera::before,
body.dsh-skin-galactic-opera::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
}

body.dsh-skin-galactic-opera::before {
  z-index: 0;
  opacity: 0.78;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.95) 0 1px, transparent 1.5px),
    radial-gradient(circle, rgba(125,227,255,0.92) 0 1px, transparent 1.4px),
    radial-gradient(circle, rgba(255,207,92,0.84) 0 1px, transparent 1.6px),
    radial-gradient(circle, rgba(255,71,120,0.62) 0 1px, transparent 1.5px);
  background-position: 0 0, 28px 41px, 67px 11px, 110px 84px;
  background-size: 115px 115px, 170px 170px, 235px 235px, 290px 290px;
  animation: dsh-skin-stars-drift 38s linear infinite;
}

body.dsh-skin-galactic-opera::after {
  z-index: 0;
  opacity: 0.34;
  background:
    linear-gradient(112deg, transparent 0 26%, rgba(125,227,255,0.32) 27%, transparent 29% 58%, rgba(255,207,92,0.24) 59%, transparent 61% 78%, rgba(255,71,120,0.20) 79%, transparent 81%),
    repeating-linear-gradient(112deg, transparent 0 42px, rgba(125,227,255,0.13) 44px, transparent 49px);
  filter: blur(0.15px);
  mix-blend-mode: screen;
  animation: dsh-skin-warp-lanes 9s ease-in-out infinite alternate;
}

body.dsh-skin-galactic-opera #root {
  isolation: isolate;
  position: relative;
  z-index: 1;
}

body.dsh-skin-galactic-opera #root::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  pointer-events: none;
  opacity: 0.36;
  mix-blend-mode: screen;
  background-image:
    radial-gradient(circle at 8% 12%, rgba(125,227,255,0.48) 0 1px, transparent 1.8px),
    radial-gradient(circle at 74% 18%, rgba(255,207,92,0.38) 0 1px, transparent 1.6px),
    radial-gradient(circle at 44% 72%, rgba(255,71,120,0.28) 0 1px, transparent 1.8px),
    linear-gradient(105deg, transparent 0 32%, rgba(125,227,255,0.18) 33%, transparent 35% 69%, rgba(255,207,92,0.16) 70%, transparent 72%),
    repeating-linear-gradient(90deg, transparent 0 72px, rgba(125,227,255,0.05) 73px, transparent 74px),
    repeating-linear-gradient(0deg, transparent 0 72px, rgba(255,207,92,0.04) 73px, transparent 74px);
  background-size: 150px 150px, 230px 230px, 310px 310px, 100% 100%, 100% 100%, 100% 100%;
  transform: translate3d(var(--dsh-skin-parallax-x), var(--dsh-skin-parallax-y), 0);
  will-change: transform;
}

body.dsh-skin-galactic-opera #root > *,
body.dsh-skin-galactic-opera main,
body.dsh-skin-galactic-opera aside,
body.dsh-skin-galactic-opera section,
body.dsh-skin-galactic-opera [class*="frame"],
body.dsh-skin-galactic-opera [class*="Frame"] {
  background-color: transparent !important;
}

body.dsh-skin-galactic-opera [class*="sidebar"],
body.dsh-skin-galactic-opera [class*="Sidebar"] {
  background:
    radial-gradient(circle at 0 0, rgba(125, 227, 255, 0.14), transparent 21rem),
    linear-gradient(180deg, rgba(4, 7, 19, 0.98), rgba(9, 14, 34, 0.94) 46%, rgba(18, 12, 29, 0.98)) !important;
  box-shadow:
    inset -1px 0 rgba(125, 227, 255, 0.28),
    inset -7px 0 28px rgba(255, 71, 120, 0.08),
    0 0 40px rgba(125, 227, 255, 0.12) !important;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor {
  position: fixed;
  inset: -2vmax;
  z-index: 2147483645;
  pointer-events: none;
  overflow: hidden;
  mix-blend-mode: screen;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor::before {
  content: "";
  position: absolute;
  inset: -12vmax;
  opacity: 0;
  pointer-events: none;
  background:
    repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 5deg, rgba(125,227,255,0.72) 5.4deg 6deg, transparent 6.4deg 12deg),
    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.82), transparent 8vmin, rgba(255,207,92,0.26) 12vmin, transparent 36vmin);
  transform: scale(0.5);
  filter: blur(0.2px);
}

body.dsh-skin-galactic-opera.dsh-skin-hyperspace .dsh-skin-galactic-opera-decor::before {
  animation: dsh-skin-hyperspace-burst 880ms cubic-bezier(.16,.8,.25,1) both;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor span {
  position: absolute;
  display: block;
  pointer-events: none;
}

body.dsh-skin-galactic-opera .dsh-skin-twinkle {
  width: 2px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255,255,255,0.96);
  opacity: 0.18;
  filter: drop-shadow(0 0 8px rgba(125,227,255,0.68));
  animation: dsh-skin-twinkle 3.8s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-twinkle-a {
  left: 46vw;
  top: 28vh;
  box-shadow:
    18vw 8vh 0 0 rgba(125,227,255,0.82),
    -14vw 21vh 0 0 rgba(255,255,255,0.74),
    24vw 33vh 0 0 rgba(255,207,92,0.66),
    -24vw 6vh 0 0 rgba(255,71,120,0.54);
}

body.dsh-skin-galactic-opera .dsh-skin-twinkle-b {
  left: 58vw;
  top: 46vh;
  width: 2.5px;
  height: 2.5px;
  animation-delay: -1.25s;
  animation-duration: 4.7s;
  box-shadow:
    -20vw -12vh 0 0 rgba(125,227,255,0.72),
    12vw -18vh 0 0 rgba(255,255,255,0.70),
    -8vw 27vh 0 0 rgba(255,207,92,0.62),
    28vw 8vh 0 0 rgba(125,227,255,0.58);
}

body.dsh-skin-galactic-opera .dsh-skin-twinkle-c {
  left: 35vw;
  top: 62vh;
  width: 1.5px;
  height: 1.5px;
  animation-delay: -2.1s;
  animation-duration: 5.4s;
  box-shadow:
    10vw -28vh 0 0 rgba(255,255,255,0.74),
    33vw -6vh 0 0 rgba(255,71,120,0.46),
    -17vw -8vh 0 0 rgba(125,227,255,0.64),
    20vw 17vh 0 0 rgba(255,207,92,0.58);
}

body.dsh-skin-galactic-opera .dsh-skin-nebula-core {
  width: 56vmin;
  height: 56vmin;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  opacity: 0.24;
  background:
    radial-gradient(circle at 50% 50%, #000 0 12%, rgba(0,0,0,0.96) 13% 18%, transparent 19%),
    radial-gradient(circle at 50% 50%, transparent 0 19%, rgba(255,248,215,0.68) 20%, rgba(255,207,92,0.44) 22%, rgba(255,71,120,0.26) 26%, transparent 32%),
    radial-gradient(ellipse at 44% 54%, transparent 0 17%, rgba(125,227,255,0.34) 19%, rgba(255,207,92,0.24) 26%, transparent 42%),
    conic-gradient(from 18deg, transparent 0 9%, rgba(125,227,255,0.36) 13%, transparent 21%, rgba(255,71,120,0.24) 29%, transparent 43%, rgba(255,207,92,0.32) 55%, transparent 70%, rgba(125,227,255,0.24) 82%, transparent 100%);
  box-shadow:
    inset 0 0 36px 18px rgba(0,0,0,0.92),
    0 0 32px rgba(0,0,0,0.85),
    0 0 76px rgba(125,227,255,0.16),
    0 0 112px rgba(255,71,120,0.10);
  filter: blur(0.55px) saturate(1.22);
  mix-blend-mode: screen;
  animation: dsh-skin-blackhole-breathe 7.2s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-orb {
  border-radius: 999px;
  filter: drop-shadow(0 0 34px rgba(125, 227, 255, 0.36));
}

body.dsh-skin-galactic-opera .dsh-skin-orb-primary {
  z-index: 7;
  width: 20vmin;
  height: 20vmin;
  right: 8vmin;
  top: 6vmin;
  opacity: 1;
  mix-blend-mode: normal;
  background:
    radial-gradient(circle at 34% 27%, rgba(255,255,255,0.9), transparent 0 9%, transparent 10%),
    radial-gradient(circle at 35% 30%, #ffe39a 0 10%, #d1782c 27%, #7b2755 51%, #111a44 74%, #050712 100%);
  box-shadow:
    inset -28px -18px 46px rgba(0,0,0,0.64),
    0 0 72px rgba(255, 207, 92, 0.28),
    0 0 120px rgba(255, 71, 120, 0.12);
  animation: dsh-skin-orb-hover 8s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-orb-moon-a {
  z-index: 10;
  width: 5.8vmin;
  height: 5.8vmin;
  right: 25vmin;
  top: 23vmin;
  opacity: 1;
  mix-blend-mode: normal;
  background: radial-gradient(circle at 36% 30%, #f6fbff, #8aa0c7 48%, #222a49 72%, #080c1a 100%);
  animation: dsh-skin-moon-a 11s ease-in-out infinite;
}


body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit,
body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit-front,
body.dsh-skin-galactic-opera .dsh-skin-satellite {
  right: 4vmin;
  top: 5.4vmin;
  width: 28vmin;
  height: 21vmin;
  transform: rotate(-19deg);
  transform-origin: 50% 50%;
}

body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit {
  z-index: 5;
  opacity: 0.56;
}

body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit-front {
  z-index: 9;
  opacity: 0.66;
}

body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit::before,
body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit-front::before {
  content: "";
  position: absolute;
  inset: 2.8vmin 1.2vmin;
  border: 1px solid rgba(125,227,255,0.24);
  border-left-color: rgba(255,207,92,0.38);
  border-bottom-color: rgba(255,71,120,0.18);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(125,227,255,0.12), inset 0 0 12px rgba(255,207,92,0.05);
}

body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit::before {
  clip-path: inset(0 0 50% 0);
}

body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit-front::before {
  clip-path: inset(50% 0 0 0);
  border-color: rgba(125,227,255,0.34);
  border-left-color: rgba(255,207,92,0.44);
  border-bottom-color: rgba(255,71,120,0.30);
  box-shadow: 0 0 20px rgba(125,227,255,0.18), inset 0 0 12px rgba(255,207,92,0.06);
}

body.dsh-skin-galactic-opera .dsh-skin-satellite {
  z-index: 4;
  animation: dsh-skin-satellite-depth 6.2s steps(1, end) infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-satellite::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.9vmin;
  height: 1.9vmin;
  border-radius: 999px;
  transform: translate(-50%, -50%) translate3d(12.8vmin, 0, 0) scale(0.84);
  will-change: transform, opacity;
  background: radial-gradient(circle at 35% 30%, #eafff7, #66ffc7 34%, #1fb7a7 58%, #102b45 78%);
  box-shadow: 0 0 14px rgba(102,255,199,0.76), 0 0 30px rgba(31,183,167,0.34);
  animation: dsh-skin-satellite-orbit 6.2s linear infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-scanner {
  width: 30vmin;
  height: 30vmin;
  left: max(18px, 3vmin);
  bottom: max(18px, 4vmin);
  opacity: 0.48;
  border: 1px solid rgba(125, 227, 255, 0.62);
  border-radius: 999px;
  background:
    radial-gradient(circle, transparent 0 28%, rgba(125, 227, 255, 0.18) 29% 30%, transparent 31% 51%, rgba(255, 207, 92, 0.16) 52% 53%, transparent 54% 70%, rgba(255,71,120,0.14) 71% 72%, transparent 73%),
    conic-gradient(from 18deg, rgba(125, 227, 255, 0.60), transparent 22%, transparent 74%, rgba(255, 207, 92, 0.48), rgba(255,71,120,0.26));
  box-shadow:
    0 0 36px rgba(125, 227, 255, 0.30),
    inset 0 0 28px rgba(125, 227, 255, 0.14);
  animation: dsh-skin-scanner-spin 7s linear infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-scanner::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 2px;
  border-radius: 999px;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, rgba(255,255,255,0.92), rgba(125,227,255,0.82), transparent);
  box-shadow: 0 0 16px rgba(125,227,255,0.58);
  animation: dsh-skin-scanner-hand 1.5s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-scanner-target {
  position: fixed !important;
  left: var(--dsh-skin-scanner-dot-x);
  top: var(--dsh-skin-scanner-dot-y);
  width: 9px;
  height: 9px;
  border-radius: 999px;
  transform: translate(-50%, -50%) scale(0.72);
  opacity: 0.04;
  background: #fff9da;
  box-shadow:
    0 0 0 1px rgba(255,207,92,0.20),
    0 0 8px rgba(125,227,255,0.18);
  transition: opacity 120ms ease-out, transform 120ms ease-out, box-shadow 120ms ease-out;
}

body.dsh-skin-galactic-opera .dsh-skin-scanner-target[data-lit="true"] {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.18);
  box-shadow:
    0 0 0 1px rgba(255,207,92,0.92),
    0 0 14px rgba(255,207,92,0.96),
    0 0 30px rgba(125,227,255,0.68),
    0 0 54px rgba(255,71,120,0.28);
  animation: dsh-skin-scanner-target-ping 260ms ease-out both;
}

body.dsh-skin-galactic-opera .dsh-skin-route-map {
  left: max(18px, 3.1vmin);
  top: max(18px, 4vmin);
  width: 24vmin;
  height: 15vmin;
  opacity: 0.45;
  border: 1px solid rgba(125, 227, 255, 0.34);
  border-radius: 18px;
  background:
    radial-gradient(circle at 14% 70%, rgba(255,207,92,0.98) 0 3px, transparent 4px),
    radial-gradient(circle at 39% 34%, rgba(125,227,255,0.98) 0 2px, transparent 3px),
    radial-gradient(circle at 67% 60%, rgba(255,255,255,0.92) 0 2px, transparent 3px),
    radial-gradient(circle at 85% 24%, rgba(255,71,120,0.88) 0 2px, transparent 3px),
    linear-gradient(28deg, transparent 0 20%, rgba(255,207,92,0.48) 21%, transparent 22% 47%, rgba(125,227,255,0.42) 48%, transparent 49% 73%, rgba(255,71,120,0.32) 74%, transparent 75%),
    repeating-linear-gradient(0deg, transparent 0 21px, rgba(125,227,255,0.12) 22px, transparent 23px),
    repeating-linear-gradient(90deg, transparent 0 25px, rgba(125,227,255,0.10) 26px, transparent 27px);
  box-shadow:
    0 0 30px rgba(125, 227, 255, 0.22),
    inset 0 0 22px rgba(125, 227, 255, 0.10);
  animation: dsh-skin-route-pulse 4.8s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-energy {
  height: 3px;
  border-radius: 999px;
  opacity: 0.72;
  transform-origin: 50% 50%;
  filter: blur(0.1px);
}

body.dsh-skin-galactic-opera .dsh-skin-energy-cyan {
  width: 48vmin;
  right: -8vmin;
  bottom: 16vmin;
  transform: rotate(-36deg);
  background: linear-gradient(90deg, transparent, rgba(125,227,255,0.98), #f5fdff, rgba(125,227,255,0.88), transparent);
  box-shadow: 0 0 20px rgba(125, 227, 255, 0.82), 0 0 52px rgba(125, 227, 255, 0.34);
  animation: dsh-skin-energy-cyan 3.2s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-energy-red {
  width: 50vmin;
  left: -12vmin;
  top: 18vmin;
  transform: rotate(-32deg);
  background: linear-gradient(90deg, transparent, rgba(255,71,120,0.94), #fff4f7, rgba(255,71,120,0.84), transparent);
  box-shadow: 0 0 20px rgba(255, 71, 120, 0.76), 0 0 54px rgba(255, 71, 120, 0.30);
  animation: dsh-skin-energy-red 3.9s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-energy-gold {
  width: 38vmin;
  right: 18vmin;
  top: 9vmin;
  transform: rotate(18deg);
  background: linear-gradient(90deg, transparent, rgba(255,207,92,0.94), #fff9da, rgba(255,207,92,0.76), transparent);
  box-shadow: 0 0 18px rgba(255, 207, 92, 0.70), 0 0 48px rgba(255, 207, 92, 0.26);
  animation: dsh-skin-energy-gold 4.4s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-comet {
  width: 22vmin;
  height: 2px;
  opacity: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,255,255,0.98), rgba(125,227,255,0.78), transparent);
  box-shadow: 0 0 20px rgba(125, 227, 255, 0.58);
  transform: rotate(-24deg) translate3d(0, 0, 0);
}

body.dsh-skin-galactic-opera .dsh-skin-comet-1 { left: -24vmin; top: 13%; animation: dsh-skin-comet-flight 5.5s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-comet-2 { left: -30vmin; top: 34%; animation: dsh-skin-comet-flight 6.8s 1.1s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-comet-3 { left: -20vmin; top: 62%; animation: dsh-skin-comet-flight 6.2s 2.3s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-comet-4 { left: -32vmin; top: 82%; animation: dsh-skin-comet-flight 7.6s 3.8s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-comet-5 { left: -26vmin; top: 49%; animation: dsh-skin-comet-flight 8s 4.7s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-comet-6 { left: -28vmin; top: 73%; animation: dsh-skin-comet-flight 9s 5.5s linear infinite; }


/* Generic angular starfighters: V silhouettes only, no copied ship geometry. Nose points left, matching the right-to-left pass. */
body.dsh-skin-galactic-opera .dsh-skin-starfighter {
  width: 4.1vmin;
  height: 2.7vmin;
  opacity: 0;
  --dsh-skin-fighter-angle: -18deg;
  /* left tip = nose; right forks = wings/engines */
  clip-path: polygon(0 50%, 100% 0, 72% 50%, 100% 100%);
  background: linear-gradient(90deg, rgba(255,255,255,0.98), rgba(125,227,255,0.82) 42%, rgba(255,207,92,0.66) 78%, rgba(255,71,120,0.52));
  box-shadow: 0 0 16px rgba(125,227,255,0.58), 0 0 28px rgba(255,207,92,0.22);
  transform: rotate(var(--dsh-skin-fighter-angle)) translate3d(0, 0, 0);
}

body.dsh-skin-galactic-opera .dsh-skin-starfighter-1 { right: -6vmin; top: 24%; --dsh-skin-fighter-angle: -18deg; animation: dsh-skin-fighter-pass 7.8s 0.8s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-starfighter-2 { right: -7vmin; top: 41%; --dsh-skin-fighter-angle: -23deg; animation: dsh-skin-fighter-pass 9.3s 3.6s linear infinite; }
body.dsh-skin-galactic-opera .dsh-skin-starfighter-3 { right: -5vmin; top: 69%; --dsh-skin-fighter-angle: -12deg; animation: dsh-skin-fighter-pass 10.4s 6.2s linear infinite; }

body.dsh-skin-galactic-opera .dsh-skin-mission-crawl {
  left: 50%;
  bottom: -3vmin;
  width: 48vmin;
  height: 18vmin;
  opacity: 0.32;
  transform: translateX(-50%) perspective(420px) rotateX(58deg);
  transform-origin: 50% 100%;
  border-top: 1px solid rgba(255,207,92,0.34);
  background:
    linear-gradient(180deg, rgba(255,207,92,0.28) 0 2px, transparent 3px 18px, rgba(255,207,92,0.18) 19px 21px, transparent 22px 38px),
    linear-gradient(90deg, transparent 0 8%, rgba(255,207,92,0.16) 9%, transparent 10% 90%, rgba(255,207,92,0.16) 91%, transparent 92%);
  background-size: 100% 42px, 100% 100%;
  filter: drop-shadow(0 0 18px rgba(255,207,92,0.28));
  animation: dsh-skin-crawl-rise 9s linear infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-mission-crawl::before {
  content: "MISSION BRIEFING · HYPERSPACE ROUTE · ALL WINGS STAND BY";
  position: absolute;
  left: 0;
  right: 0;
  top: 14px;
  color: rgba(255, 207, 92, 0.82);
  font: 700 11px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: 0.18em;
  text-align: center;
  text-shadow: 0 0 14px rgba(255,207,92,0.46);
}

body.dsh-skin-galactic-opera .dsh-skin-pulse {
  position: fixed;
  left: var(--dsh-skin-pulse-x);
  top: var(--dsh-skin-pulse-y);
  width: 18px;
  height: 18px;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  opacity: 0;
  border: 1px solid var(--dsh-skin-pulse-color, rgba(125,227,255,0.9));
  box-shadow:
    0 0 22px var(--dsh-skin-pulse-color, rgba(125,227,255,0.7)),
    inset 0 0 18px rgba(255,255,255,0.22);
  animation: dsh-skin-click-pulse 780ms ease-out both;
}

body.dsh-skin-galactic-opera button,
body.dsh-skin-galactic-opera input,
body.dsh-skin-galactic-opera textarea,
body.dsh-skin-galactic-opera select {
  text-shadow: 0 0 12px rgba(125, 227, 255, 0.18);
}

body.dsh-skin-galactic-opera textarea,
body.dsh-skin-galactic-opera input {
  caret-color: var(--dsh-skin-gold);
}

body.dsh-skin-galactic-opera button:hover,
body.dsh-skin-galactic-opera [role="button"]:hover {
  box-shadow:
    0 0 0 1px rgba(125, 227, 255, 0.48),
    0 0 26px rgba(125, 227, 255, 0.26),
    0 0 42px rgba(255, 71, 120, 0.12),
    inset 0 0 20px rgba(255, 207, 92, 0.08) !important;
}

body.dsh-skin-galactic-opera a,
body.dsh-skin-galactic-opera [data-link] {
  color: var(--dsh-skin-cyan);
  text-shadow: 0 0 16px rgba(125, 227, 255, 0.30);
}

body.dsh-skin-galactic-opera pre,
body.dsh-skin-galactic-opera code {
  border-color: rgba(125, 227, 255, 0.30) !important;
  text-shadow: 0 0 12px rgba(125, 227, 255, 0.16);
}

body.dsh-skin-galactic-opera pre {
  box-shadow:
    inset 0 0 0 1px rgba(255, 207, 92, 0.10),
    0 0 34px rgba(4, 8, 18, 0.45) !important;
}

body.dsh-skin-galactic-opera :is(pre, code, textarea, input, select, [class*="message"], [class*="Message"]):hover {
  outline: 1px solid rgba(125, 227, 255, 0.20);
  outline-offset: 2px;
  box-shadow:
    0 0 0 1px rgba(125, 227, 255, 0.16),
    0 0 24px rgba(125, 227, 255, 0.12),
    inset 0 0 20px rgba(255, 207, 92, 0.035) !important;
}

body.dsh-skin-galactic-opera ::selection {
  color: #03040b;
  background: rgba(255, 207, 92, 0.86);
}

body.dsh-skin-galactic-opera * {
  scrollbar-color: rgba(125, 227, 255, 0.42) rgba(5, 7, 17, 0.40);
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-source-hidden {
  opacity: 0 !important;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel[hidden] {
  display: none !important;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel {
  position: fixed;
  right: max(18px, 2.4vmin);
  bottom: max(18px, 2.4vmin);
  z-index: 2147483644;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: min(260px, 36vw);
  max-height: none;
  overflow: visible;
  padding: 19px 12px 12px;
  border: 1px solid rgba(125,227,255,0.48);
  border-left-color: rgba(255,207,92,0.62);
  border-bottom-color: rgba(255,71,120,0.36);
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 14px);
  color: rgba(248,251,255,0.92);
  background:
    linear-gradient(135deg, rgba(255,207,92,0.20) 0 10px, transparent 11px),
    linear-gradient(315deg, rgba(125,227,255,0.18) 0 12px, transparent 13px),
    linear-gradient(180deg, rgba(6,10,26,0.92), rgba(10,17,42,0.84));
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,0.07),
    inset 0 0 24px rgba(125,227,255,0.09),
    0 0 28px rgba(125,227,255,0.22),
    0 0 52px rgba(255,71,120,0.10);
  backdrop-filter: blur(12px) saturate(1.35);
  -webkit-backdrop-filter: blur(12px) saturate(1.35);
  pointer-events: none;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel::before {
  content: "TELEMETRY";
  position: absolute;
  left: 14px;
  top: 5px;
  color: rgba(255,207,92,0.82);
  font: 800 8px/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: 0.20em;
  text-shadow: 0 0 10px rgba(255,207,92,0.42);
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel::after {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(125,227,255,0.16);
  clip-path: polygon(11px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 11px);
  background:
    repeating-linear-gradient(90deg, transparent 0 18px, rgba(125,227,255,0.045) 19px, transparent 20px 36px),
    linear-gradient(90deg, rgba(125,227,255,0.10), transparent 30%, rgba(255,71,120,0.06));
  pointer-events: none;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-row {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0;
  min-width: 0;
  padding: 3px 0 3px 9px;
  border-left: 2px solid rgba(125,227,255,0.46);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  text-shadow: 0 0 10px rgba(125,227,255,0.30);
  white-space: nowrap;
}


body.dsh-skin-galactic-opera .dsh-skin-telemetry-value {
  flex: 0 0 auto;
  color: rgba(248,251,255,0.96);
  font-size: 10.5px;
  line-height: 1.25;
  letter-spacing: 0.035em;
  text-align: right;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-value-full {
  flex: 1 1 auto;
  text-align: left;
  white-space: nowrap;
}

@keyframes dsh-skin-stars-drift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-115px, 115px, 0); }
}

@keyframes dsh-skin-twinkle {
  0%, 100% { opacity: 0.12; transform: scale(0.78); filter: drop-shadow(0 0 4px rgba(125,227,255,0.30)); }
  45% { opacity: 0.88; transform: scale(1.45); filter: drop-shadow(0 0 13px rgba(255,207,92,0.58)); }
  62% { opacity: 0.34; transform: scale(0.96); }
}

@keyframes dsh-skin-satellite-orbit {
  0%, 100% { transform: translate(-50%, -50%) translate3d(12.8vmin, 0, 0) scale(0.84); opacity: 0.52; }
  6.25% { transform: translate(-50%, -50%) translate3d(11.8vmin, -2.95vmin, 0) scale(0.88); opacity: 0.64; }
  12.5% { transform: translate(-50%, -50%) translate3d(9.05vmin, -5.45vmin, 0) scale(0.92); opacity: 0.78; }
  18.75% { transform: translate(-50%, -50%) translate3d(4.9vmin, -7.12vmin, 0) scale(0.98); opacity: 0.88; }
  25% { transform: translate(-50%, -50%) translate3d(0, -7.7vmin, 0) scale(1.04); opacity: 0.96; }
  31.25% { transform: translate(-50%, -50%) translate3d(-4.9vmin, -7.12vmin, 0) scale(1.08); opacity: 0.92; }
  37.5% { transform: translate(-50%, -50%) translate3d(-9.05vmin, -5.45vmin, 0) scale(1.10); opacity: 0.86; }
  43.75% { transform: translate(-50%, -50%) translate3d(-11.8vmin, -2.95vmin, 0) scale(1.14); opacity: 0.80; }
  50% { transform: translate(-50%, -50%) translate3d(-12.8vmin, 0, 0) scale(1.16); opacity: 0.74; }
  56.25% { transform: translate(-50%, -50%) translate3d(-11.8vmin, 2.95vmin, 0) scale(1.12); opacity: 0.70; }
  62.5% { transform: translate(-50%, -50%) translate3d(-9.05vmin, 5.45vmin, 0) scale(1.08); opacity: 0.66; }
  68.75% { transform: translate(-50%, -50%) translate3d(-4.9vmin, 7.12vmin, 0) scale(1.02); opacity: 0.62; }
  75% { transform: translate(-50%, -50%) translate3d(0, 7.7vmin, 0) scale(0.96); opacity: 0.58; }
  81.25% { transform: translate(-50%, -50%) translate3d(4.9vmin, 7.12vmin, 0) scale(0.92); opacity: 0.54; }
  87.5% { transform: translate(-50%, -50%) translate3d(9.05vmin, 5.45vmin, 0) scale(0.88); opacity: 0.48; }
  93.75% { transform: translate(-50%, -50%) translate3d(11.8vmin, 2.95vmin, 0) scale(0.86); opacity: 0.46; }
}

@keyframes dsh-skin-satellite-depth {
  0%, 13.9% { z-index: 4; opacity: 1; }
  14%, 36% { z-index: 4; opacity: 0; }
  36.1%, 49.9% { z-index: 4; opacity: 1; }
  50%, 100% { z-index: 9; opacity: 1; }
}

@keyframes dsh-skin-warp-lanes {
  from { transform: translate3d(-2%, 0, 0); opacity: 0.22; }
  to { transform: translate3d(2%, 0, 0); opacity: 0.38; }
}

@keyframes dsh-skin-blackhole-breathe {
  0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.96) rotate(0deg); filter: blur(0.65px) saturate(1.08); }
  50% { opacity: 0.30; transform: translate(-50%, -50%) scale(1.05) rotate(7deg); filter: blur(0.45px) saturate(1.36); }
}

@keyframes dsh-skin-orb-hover {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-1.4vmin, 1.1vmin, 0) scale(1.04); }
}

@keyframes dsh-skin-moon-a {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(2.4vmin, -1.8vmin, 0); }
}



@keyframes dsh-skin-scanner-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes dsh-skin-scanner-hand {
  0%, 100% { opacity: 0.55; transform: rotate(-7deg) scaleX(0.84); }
  50% { opacity: 1; transform: rotate(7deg) scaleX(1); }
}

@keyframes dsh-skin-scanner-target-ping {
  0%, 100% { transform: translate(-50%, -50%) scale(0.86); opacity: 0.68; }
  50% { transform: translate(-50%, -50%) scale(1.22); opacity: 1; }
}

@keyframes dsh-skin-click-pulse {
  0% { opacity: 0.92; width: 12px; height: 12px; filter: brightness(1.45); }
  65% { opacity: 0.34; }
  100% { opacity: 0; width: 132px; height: 132px; filter: brightness(0.8); }
}

@keyframes dsh-skin-hyperspace-burst {
  0% { opacity: 0; transform: scale(0.32) rotate(0deg); }
  15% { opacity: 0.9; }
  100% { opacity: 0; transform: scale(1.45) rotate(10deg); }
}

@keyframes dsh-skin-route-pulse {
  0%, 100% { opacity: 0.32; filter: saturate(0.9); }
  50% { opacity: 0.56; filter: saturate(1.35); }
}

@keyframes dsh-skin-energy-cyan {
  0%, 100% { opacity: 0.44; filter: brightness(0.9); }
  45% { opacity: 0.90; filter: brightness(1.42); }
  60% { opacity: 0.58; }
}

@keyframes dsh-skin-energy-red {
  0%, 100% { opacity: 0.38; filter: brightness(0.85); }
  40% { opacity: 0.86; filter: brightness(1.52); }
  58% { opacity: 0.50; }
}

@keyframes dsh-skin-energy-gold {
  0%, 100% { opacity: 0.34; filter: brightness(0.9); }
  50% { opacity: 0.78; filter: brightness(1.38); }
}

@keyframes dsh-skin-comet-flight {
  0% { opacity: 0; transform: rotate(-24deg) translate3d(-24vmin, 0, 0); }
  8% { opacity: 0.92; }
  34% { opacity: 0; transform: rotate(-24deg) translate3d(138vw, 0, 0); }
  100% { opacity: 0; transform: rotate(-24deg) translate3d(138vw, 0, 0); }
}


@keyframes dsh-skin-fighter-pass {
  0% { opacity: 0; transform: rotate(var(--dsh-skin-fighter-angle)) translate3d(10vw, 0, 0) scale(0.74); }
  9% { opacity: 0.78; }
  24% { opacity: 0.42; transform: rotate(var(--dsh-skin-fighter-angle)) translate3d(-52vw, 9vh, 0) scale(1.0); }
  42% { opacity: 0; transform: rotate(var(--dsh-skin-fighter-angle)) translate3d(-126vw, 20vh, 0) scale(1.16); }
  100% { opacity: 0; transform: rotate(var(--dsh-skin-fighter-angle)) translate3d(-126vw, 20vh, 0) scale(1.16); }
}

@keyframes dsh-skin-crawl-rise {
  from { background-position: 0 0, 0 0; opacity: 0.22; }
  45% { opacity: 0.38; }
  to { background-position: 0 -84px, 0 0; opacity: 0.22; }
}

@media (prefers-reduced-motion: reduce) {
  body.dsh-skin-galactic-opera::before,
  body.dsh-skin-galactic-opera::after,
  body.dsh-skin-galactic-opera #root::before,
  body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor * {
    animation: none !important;
  }

  body.dsh-skin-galactic-opera .dsh-skin-comet,
  body.dsh-skin-galactic-opera .dsh-skin-starfighter,
  body.dsh-skin-galactic-opera .dsh-skin-mission-crawl,
  body.dsh-skin-galactic-opera .dsh-skin-pulse,
  body.dsh-skin-galactic-opera .dsh-skin-nebula-core {
    display: none;
  }

  body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor {
    transform: none;
  }
}
`;

		function ensureStyle() {
			if (typeof document === "undefined") return undefined;
			let tag = document.getElementById(STYLE_ID);
			if (tag instanceof HTMLStyleElement) return tag;
			tag = document.createElement("style");
			tag.id = STYLE_ID;
			tag.dataset.plugin = PLUGIN_ID;
			tag.dataset.pluginCss = CSS_TAG_ID;
			tag.textContent = CSS;
			document.head.appendChild(tag);
			return tag;
		}

		function ensureDecor() {
			if (typeof document === "undefined") return undefined;
			let decor = document.getElementById(DECOR_ID);
			if (decor instanceof HTMLDivElement) return decor;
			decor = document.createElement("div");
			decor.id = DECOR_ID;
			decor.className = "dsh-skin-galactic-opera-decor";
			decor.setAttribute("aria-hidden", "true");
			decor.dataset.plugin = PLUGIN_ID;
			decor.innerHTML = [
				"<span class=\"dsh-skin-nebula-core\"></span>",
				"<span class=\"dsh-skin-twinkle dsh-skin-twinkle-a\"></span>",
				"<span class=\"dsh-skin-twinkle dsh-skin-twinkle-b\"></span>",
				"<span class=\"dsh-skin-twinkle dsh-skin-twinkle-c\"></span>",
				"<span class=\"dsh-skin-orb dsh-skin-orb-primary\"></span>",
				"<span class=\"dsh-skin-orb dsh-skin-orb-moon-a\"></span>",
				"<span class=\"dsh-skin-satellite-orbit\"></span>",
				"<span class=\"dsh-skin-satellite-orbit-front\"></span>",
				"<span class=\"dsh-skin-satellite\"></span>",
				"<span class=\"dsh-skin-scanner\"></span>",
				"<span class=\"dsh-skin-scanner-target\"></span>",
				"<span class=\"dsh-skin-route-map\"></span>",
				"<span class=\"dsh-skin-energy dsh-skin-energy-cyan\"></span>",
				"<span class=\"dsh-skin-energy dsh-skin-energy-red\"></span>",
				"<span class=\"dsh-skin-energy dsh-skin-energy-gold\"></span>",
				"<span class=\"dsh-skin-starfighter dsh-skin-starfighter-1\"></span>",
				"<span class=\"dsh-skin-starfighter dsh-skin-starfighter-2\"></span>",
				"<span class=\"dsh-skin-starfighter dsh-skin-starfighter-3\"></span>",
				"<span class=\"dsh-skin-mission-crawl\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-1\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-2\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-3\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-4\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-5\"></span>",
				"<span class=\"dsh-skin-comet dsh-skin-comet-6\"></span>"
			].join("");
			document.body.appendChild(decor);
			return decor;
		}

		function isReducedMotion() {
			return typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
		}

		function isEditableTarget(target) {
			if (!(target instanceof Element)) return false;
			const tag = target.tagName.toLowerCase();
			return tag === "input" || tag === "textarea" || tag === "select" || target.closest("[contenteditable=true]") !== null;
		}

		function isInstructionInputTarget(target) {
			if (!(target instanceof Element)) return false;
			const tag = target.tagName.toLowerCase();
			return tag === "textarea" || target.closest("[contenteditable=true]") !== null;
		}

		function isLikelySendButton(target) {
			if (!(target instanceof Element)) return false;
			const button = target.closest("button");
			if (!(button instanceof HTMLButtonElement)) return false;
			const form = button.closest("form");
			if (form !== null && form.querySelector("textarea, [contenteditable=true]") !== null && button.type === "submit") return true;
			const label = `${button.getAttribute("aria-label") ?? ""} ${button.getAttribute("title") ?? ""} ${button.textContent ?? ""}`.toLowerCase();
			return /send|submit|发送|提交|送出|传送/.test(label);
		}

		function installInteractions(decor) {
			if (typeof document === "undefined" || typeof window === "undefined" || decor === undefined) return () => {};
			let frame = 0;
			let sweepFrame = 0;
			let latestX = window.innerWidth / 2;
			let latestY = window.innerHeight / 2;
			let targetAngle = 0;
			let pulseIndex = 0;
			let hyperspaceTimer;
			let lastHyperspaceAt = 0;
			const scannerTarget = decor.querySelector(".dsh-skin-scanner-target");
			const scannerStartedAt = performance.now();
			const pulseColors = ["rgba(125,227,255,0.94)", "rgba(255,207,92,0.92)", "rgba(255,71,120,0.88)"];
			const updatePointer = () => {
				frame = 0;
				const nx = (latestX / Math.max(1, window.innerWidth) - 0.5) * 2;
				const ny = (latestY / Math.max(1, window.innerHeight) - 0.5) * 2;
				document.body.style.setProperty("--dsh-skin-parallax-x", `${Math.round(nx * -10)}px`);
				document.body.style.setProperty("--dsh-skin-parallax-y", `${Math.round(ny * -8)}px`);
				const scanner = decor.querySelector(".dsh-skin-scanner");
				if (scanner instanceof HTMLElement) {
					const rect = scanner.getBoundingClientRect();
					const scannerCenterX = rect.left + rect.width / 2;
					const scannerCenterY = rect.top + rect.height / 2;
					// Navigation mode: direction is measured from the viewport center,
					// then projected onto the scanner disk so it behaves like a HUD compass.
					const viewportCenterX = window.innerWidth / 2;
					const viewportCenterY = window.innerHeight / 2;
					const angle = Math.atan2(latestY - viewportCenterY, latestX - viewportCenterX);
					targetAngle = (angle * 180 / Math.PI + 360) % 360;
					const radius = Math.max(10, Math.min(rect.width, rect.height) * 0.38);
					document.body.style.setProperty("--dsh-skin-scanner-dot-x", `${Math.round(scannerCenterX + Math.cos(angle) * radius)}px`);
					document.body.style.setProperty("--dsh-skin-scanner-dot-y", `${Math.round(scannerCenterY + Math.sin(angle) * radius)}px`);
				}
			};
			const onPointerMove = (event) => {
				if (isReducedMotion()) return;
				latestX = event.clientX;
				latestY = event.clientY;
				if (frame === 0) frame = requestAnimationFrame(updatePointer);
			};
			const triggerHyperspace = () => {
				if (isReducedMotion()) return;
				const now = performance.now();
				if (now - lastHyperspaceAt < 1200) return;
				lastHyperspaceAt = now;
				document.body.classList.add("dsh-skin-hyperspace");
				window.clearTimeout(hyperspaceTimer);
				hyperspaceTimer = window.setTimeout(() => {
					document.body.classList.remove("dsh-skin-hyperspace");
				}, 900);
			};
			const onPointerDown = (event) => {
				if (isReducedMotion()) return;
				const pulse = document.createElement("span");
				pulse.className = "dsh-skin-pulse";
				pulse.style.setProperty("--dsh-skin-pulse-x", `${event.clientX}px`);
				pulse.style.setProperty("--dsh-skin-pulse-y", `${event.clientY}px`);
				pulse.style.setProperty("--dsh-skin-pulse-color", pulseColors[pulseIndex % pulseColors.length]);
				pulseIndex += 1;
				decor.appendChild(pulse);
				const remove = () => { pulse.remove(); };
				pulse.addEventListener("animationend", remove, { once: true });
				window.setTimeout(remove, 900);
				if (isLikelySendButton(event.target)) window.setTimeout(triggerHyperspace, 40);
			};
			const onKeyDown = (event) => {
				if (isReducedMotion() || event.isComposing) return;
				if (!isInstructionInputTarget(event.target)) return;
				if (event.code !== "Enter" || event.shiftKey || event.altKey) return;
				window.setTimeout(triggerHyperspace, 40);
			};
			const sweepLoop = () => {
				if (scannerTarget instanceof HTMLElement) {
					if (isReducedMotion()) {
						scannerTarget.removeAttribute("data-lit");
					} else {
						// The scanner disk rotates once every 7s. Offset roughly matches the bright conic wedge.
						const sweepAngle = (((performance.now() - scannerStartedAt) % 7000) / 7000 * 360 + 18) % 360;
						const delta = Math.abs(((sweepAngle - targetAngle + 540) % 360) - 180);
						if (delta < 10) scannerTarget.dataset.lit = "true";
						else scannerTarget.removeAttribute("data-lit");
					}
				}
				sweepFrame = requestAnimationFrame(sweepLoop);
			};
			updatePointer();
			sweepFrame = requestAnimationFrame(sweepLoop);
			document.addEventListener("pointermove", onPointerMove, { passive: true });
			document.addEventListener("pointerdown", onPointerDown, { passive: true });
			document.addEventListener("keydown", onKeyDown);
			return () => {
				document.removeEventListener("pointermove", onPointerMove);
				document.removeEventListener("pointerdown", onPointerDown);
				document.removeEventListener("keydown", onKeyDown);
				if (frame !== 0) cancelAnimationFrame(frame);
				if (sweepFrame !== 0) cancelAnimationFrame(sweepFrame);
				if (scannerTarget instanceof HTMLElement) scannerTarget.removeAttribute("data-lit");
				window.clearTimeout(hyperspaceTimer);
				document.body.classList.remove("dsh-skin-hyperspace");
				document.body.style.removeProperty("--dsh-skin-parallax-x");
				document.body.style.removeProperty("--dsh-skin-parallax-y");
				document.body.style.removeProperty("--dsh-skin-scanner-dot-x");
				document.body.style.removeProperty("--dsh-skin-scanner-dot-y");
			};
		}

		function installTelemetryPanel() {
			if (typeof document === "undefined" || typeof window === "undefined") return () => {};
			const telemetryPattern = /token|tokens|tok|toks|调用|消耗|上下文|context|usage|prompt|completion|cache|cached|缓存|命中|输入|输出|模型|model|费用|cost|轮次|轮|步骤|步数|步|step|steps|round|rounds|turn|turns/i;
			const skipSelector = `#${DECOR_ID}, style, script, textarea, input, select, [contenteditable=true], [role=dialog], [role=menu], [role=tooltip], [popover], .dsh-skin-pulse, .dsh-skin-telemetry-panel`;
			const editableDescendantSelector = "textarea, input, select, [contenteditable=true]";
			let currentSources = new Set();
			let lastText = "";
			let frame = 0;
			const panel = document.createElement("div");
			panel.className = "dsh-skin-telemetry-panel";
			panel.setAttribute("aria-hidden", "true");
			panel.hidden = true;
			document.body.appendChild(panel);
			const isSkippable = (element) => element.closest(skipSelector) !== null;
			const hasEditableDescendant = (element) => element.querySelector(editableDescendantSelector) !== null;
			const getTelemetryText = (element) => (element.innerText || element.textContent || "").replace(/\s+/g, " ").trim();
			const scoreCandidate = (element) => {
				if (!(element instanceof HTMLElement) || isSkippable(element) || hasEditableDescendant(element)) return 0;
				const rect = element.getBoundingClientRect();
				const compactBottomBar = rect.height <= 46 && rect.width <= window.innerWidth && rect.bottom > window.innerHeight - 150;
				if (rect.width < 12 || rect.height < 8 || (!compactBottomBar && rect.width > Math.min(620, window.innerWidth * 0.72)) || rect.height > 86) return 0;
				if (rect.bottom < window.innerHeight - 170) return 0;
				const text = getTelemetryText(element);
				if (text.length < 2 || text.length > 360 || !telemetryPattern.test(text) || !/\d/.test(text)) return 0;
				if (/设置\s+设置\s+通用设置|Cmd\/Ctrl\+Enter|使用另一行|排队发送|Agent\s+预设/i.test(text)) return 0;
				let score = compactBottomBar ? 4 : 1;
				if (rect.bottom > window.innerHeight - 72) score += 3;
				if (rect.right > window.innerWidth * 0.45) score += 1;
				if (/token|tokens|tok|toks/i.test(text)) score += 3;
				if (/调用|消耗|上下文|usage|context|缓存|命中|输入|输出/i.test(text)) score += 2;
				if (/轮次|轮|步骤|步数|步|steps?|rounds?|turns?/i.test(text)) score += 2;
				if (/[·•|；;]/.test(text)) score += 2;
				if (/button|input|textarea|select/i.test(element.tagName)) score -= 4;
				return score;
			};
			const chooseTelemetryElements = () => {
				const xs = [0.10, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 0.94];
				const ys = [18, 38, 62, 90, 122, 150];
				const candidates = new Map();
				for (const xRatio of xs) for (const yOffset of ys) {
					const x = window.innerWidth * xRatio;
					const y = window.innerHeight - yOffset;
					if (y < 0) continue;
					for (const base of document.elementsFromPoint(x, y)) {
						let element = base;
						for (let depth = 0; element instanceof HTMLElement && depth < 8; depth += 1, element = element.parentElement) {
							const score = scoreCandidate(element);
							if (score > 0) candidates.set(element, Math.max(candidates.get(element) ?? 0, score));
						}
					}
				}
				return [...candidates]
					.sort(([a, aScore], [b, bScore]) => {
						if (bScore !== aScore) return bScore - aScore;
						const ar = a.getBoundingClientRect();
						const br = b.getBoundingClientRect();
						return ar.top - br.top || ar.left - br.left;
					})
					.filter(([element], index, entries) => !entries.slice(0, index).some(([selected]) => selected.contains(element) || element.contains(selected)))
					.slice(0, 10)
					.map(([element]) => element)
					.sort((a, b) => {
						const ar = a.getBoundingClientRect();
						const br = b.getBoundingClientRect();
						return ar.top - br.top || ar.left - br.left;
					});
			};
			const splitTelemetryRows = (text) => {
				const normalized = text
					.replace(/\s*([|；;])\s*/g, " | ")
					.replace(/\s*([·•])\s*/g, " $1 ")
					.replace(/\s{2,}/g, " ")
					.trim();
				const hasExplicitBlocks = /[|；;]/.test(normalized);
				const strongParts = normalized.split(/\s+\|\s+|\s*；\s*|\s*;\s*/).map((part) => part.trim()).filter(Boolean);
				const labelBoundary = /\s+(?=(?:LLM\b|工具调用|缓存命中|缓存|命中|模型|费用|上下文|输入|context\b|usage\b|model\b|cost\b|cache\b|cached\b|prompt\b))/gi;
				const parts = hasExplicitBlocks ? strongParts : strongParts.flatMap((part) => part
					.replace(labelBoundary, " | ")
					.split(/\s+\|\s+/)
					.map((item) => item.trim())
					.filter(Boolean));
				const rows = [];
				const isRoundOnly = (value) => /^[\d.,KkMm%/]+\s*(?:轮|rounds?|turns?)$/i.test(value);
				const isStepOnly = (value) => /^[\d.,KkMm%/]+\s*(?:步|steps?)$/i.test(value);
				const isFirstTokenPrefix = (value) => /^首$/i.test(value);
				const isTokenAverage = (value) => /^(?:首\s*)?(?:token|tokens|tok|toks)\s*平均\b/i.test(value);
				const isTokenSpeedUnit = (value) => /^(?:token|tokens|tok|toks)\/s$/i.test(value);
				const isInputOnly = (value) => /^(?:输入|prompt\b)/i.test(value);
				const isOutputOnly = (value) => /^(?:输出|completion\b)/i.test(value);
				const isTelemetryRow = (value) => /\d/.test(value) && /LLM\b|工具调用|token|tokens|tok|toks|调用|消耗|上下文|context\b|usage\b|prompt\b|completion\b|cache\b|cached\b|缓存|命中|输入|输出|模型|model\b|费用|cost\b|轮次|轮|步骤|步数|步|steps?|rounds?|turns?/i.test(value);
				for (let index = 0; index < parts.length; index += 1) {
					const part = parts[index];
					const next = parts[index + 1];
					const afterNext = parts[index + 2];
					if (next !== undefined && isFirstTokenPrefix(part) && isTokenAverage(next)) {
						if (afterNext !== undefined && isTokenSpeedUnit(afterNext)) {
							rows.push(`${part} ${next} ${afterNext}`);
							index += 2;
						} else {
							rows.push(`${part} ${next}`);
							index += 1;
						}
						continue;
					}
					if (next !== undefined && isTokenAverage(part) && isTokenSpeedUnit(next)) {
						rows.push(`${part} ${next}`);
						index += 1;
						continue;
					}
					if (next !== undefined && isRoundOnly(part) && isStepOnly(next)) {
						rows.push(`${part} · ${next}`);
						index += 1;
						continue;
					}
					if (next !== undefined && isInputOnly(part) && isOutputOnly(next)) {
						rows.push(`${part} · ${next}`);
						index += 1;
						continue;
					}
					rows.push(part);
				}
				const seen = new Set();
				return rows.filter((row) => {
					if (!isTelemetryRow(row) || seen.has(row)) return false;
					seen.add(row);
					return true;
				}).slice(0, 20);
			};
			const renderPanel = (text) => {
				const rows = splitTelemetryRows(text);
				panel.hidden = rows.length === 0;
				panel.replaceChildren(...rows.map((text) => {
					const row = document.createElement("div");
					row.className = "dsh-skin-telemetry-row";
					const metric = document.createElement("span");
					metric.className = "dsh-skin-telemetry-value dsh-skin-telemetry-value-full";
					metric.textContent = text;
					row.append(metric);
					return row;
				}));
			};
			const update = () => {
				frame = 0;
				const nextSources = new Set(chooseTelemetryElements());
				const text = [...nextSources].map(getTelemetryText).filter(Boolean).join(" | ");
				for (const source of currentSources) if (!nextSources.has(source)) source.classList.remove("dsh-skin-telemetry-source-hidden");
				for (const source of nextSources) if (!currentSources.has(source)) source.classList.add("dsh-skin-telemetry-source-hidden");
				currentSources = nextSources;
				if (text === lastText) return;
				lastText = text;
				renderPanel(text);
			};
			const schedule = () => {
				if (frame === 0) frame = requestAnimationFrame(update);
			};
			const observer = typeof MutationObserver === "undefined" ? undefined : new MutationObserver(schedule);
			schedule();
			observer?.observe(document.body, { childList: true, subtree: true, characterData: true });
			window.addEventListener("resize", schedule, { passive: true });
			return () => {
				observer?.disconnect();
				window.removeEventListener("resize", schedule);
				if (frame !== 0) cancelAnimationFrame(frame);
				for (const source of currentSources) source.classList.remove("dsh-skin-telemetry-source-hidden");
				panel.remove();
			};
		}

		const inject = ["theme"];

		function apply(ctx) {
			ctx.effect(() => {
				const style = ensureStyle();
				if (typeof document !== "undefined") document.body.classList.add("dsh-skin-galactic-opera");
				const decor = ensureDecor();
				const disposeInteractions = installInteractions(decor);
				const disposeTelemetryPanel = installTelemetryPanel();
				return () => {
					disposeTelemetryPanel();
					disposeInteractions();
					if (typeof document !== "undefined") document.body.classList.remove("dsh-skin-galactic-opera");
					decor?.remove();
					style?.remove();
				};
			}, "dsh-skin-galactic-opera: global CSS, animated decor, and interactions");

			ctx.effect(() => ctx.theme.overrideTokens(PLUGIN_ID, TOKEN_OVERRIDES), "dsh-skin-galactic-opera: token override layer");

			ctx.effect(() => {
				const previousPreference = ctx.theme.getTheme().preference;
				const disposeTheme = ctx.theme.register({
					id: THEME_ID,
					colorScheme: "dark",
					tokens: TOKENS
				});
				ctx.theme.setTheme(THEME_ID);
				return () => {
					const wasActive = ctx.theme.getTheme().preference === THEME_ID;
					disposeTheme();
					if (wasActive && previousPreference !== THEME_ID) {
						try {
							ctx.theme.setTheme(previousPreference);
						} catch {
							// The previous custom theme may have been removed by another plugin.
						}
					}
				};
			}, `dsh-skin-galactic-opera: ${THEME_LABEL} theme`);
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
