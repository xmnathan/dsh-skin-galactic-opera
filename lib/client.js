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
		const DECOR_HOST_CLASS = "dsh-skin-galactic-opera-decor-host";
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
  scrollbar-color: rgba(125, 227, 255, 0.42) rgba(5, 7, 17, 0.40);
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

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active::before,
body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active::after,
body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active #root::before {
  animation-play-state: paused !important;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active::before {
  opacity: 0.28;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active::after {
  opacity: 0.12;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active #root::before {
  opacity: 0.10;
  transform: none;
  will-change: auto;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active :is(.dsh-skin-energy, .dsh-skin-comet, .dsh-skin-starfighter, .dsh-skin-mission-crawl, .dsh-skin-scanner, .dsh-skin-route-map),
body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active .dsh-skin-scanner::after {
  animation-play-state: paused !important;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active :is(.dsh-skin-energy, .dsh-skin-comet, .dsh-skin-starfighter, .dsh-skin-mission-crawl) {
  opacity: 0.16 !important;
}

body.dsh-skin-galactic-opera #root > *,
body.dsh-skin-galactic-opera main,
body.dsh-skin-galactic-opera aside,
body.dsh-skin-galactic-opera section,
body.dsh-skin-galactic-opera [class*="frame"],
body.dsh-skin-galactic-opera [class*="Frame"] {
  background-color: transparent !important;
}

body.dsh-skin-galactic-opera :is([role="dialog"], [role="menu"], [role="listbox"], [role="tooltip"], [popover], [data-radix-popper-content-wrapper]) {
  z-index: 2147483647 !important;
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

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor-host,
body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor {
  position: fixed;
  inset: -2vmax;
  z-index: 2147483645;
  pointer-events: none;
  overflow: hidden;
  mix-blend-mode: screen;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor-host {
  display: block;
  width: auto;
  height: auto;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor::before {
  content: "";
  position: absolute;
  left: 48%;
  top: 50%;
  width: 140vmax;
  height: 140vmax;
  opacity: 0;
  pointer-events: none;
  background:
    repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 5deg, rgba(125,227,255,0.72) 5.4deg 6deg, transparent 6.4deg 12deg),
    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.82), transparent 8vmin, rgba(255,207,92,0.26) 12vmin, transparent 36vmin);
  transform: translate(-50%, -50%) scale(0.5);
  filter: blur(0.2px);
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-hyperspace .dsh-skin-galactic-opera-decor::before {
  animation: dsh-skin-galactic-opera-hyperspace-burst 880ms cubic-bezier(.16,.8,.25,1) both;
}

body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor,
body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor *,
body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor *::before,
body.dsh-skin-galactic-opera .dsh-skin-galactic-opera-decor *::after {
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  font: inherit;
  line-height: 1;
  text-decoration: none;
  background-clip: border-box;
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
  animation: dsh-skin-blackhole-breathe 9.6s ease-in-out infinite;
}

body.dsh-skin-galactic-opera .dsh-skin-nebula-core::after {
  content: "";
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  mix-blend-mode: screen;
  inset: -22%;
  opacity: 0;
  background:
    radial-gradient(circle at 50% 14%, rgba(255,255,255,0.72) 0 1px, transparent 1.8px),
    radial-gradient(circle at 80% 44%, rgba(125,227,255,0.58) 0 1.1px, transparent 2px),
    radial-gradient(circle at 24% 66%, rgba(255,207,92,0.48) 0 1px, transparent 1.8px);
  -webkit-mask-image: radial-gradient(circle, transparent 0 16%, #000 24% 68%, transparent 82%);
  mask-image: radial-gradient(circle, transparent 0 16%, #000 24% 68%, transparent 82%);
  animation: dsh-skin-blackhole-infall 9.8s cubic-bezier(.42,0,.18,1) infinite;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-hyperspace .dsh-skin-nebula-core {
  animation: dsh-skin-blackhole-warp-pull 880ms cubic-bezier(.16,.8,.25,1) both;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-hyperspace .dsh-skin-nebula-core::after {
  animation: dsh-skin-blackhole-infall-burst 880ms cubic-bezier(.16,.8,.25,1) both;
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

body.dsh-skin-galactic-opera .dsh-skin-scanner-target[data-ping="true"] {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.18);
  box-shadow:
    0 0 0 1px rgba(255,207,92,0.92),
    0 0 14px rgba(255,207,92,0.96),
    0 0 30px rgba(125,227,255,0.68),
    0 0 54px rgba(255,71,120,0.28);
  animation: dsh-skin-scanner-target-double-ping 640ms ease-out both;
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

body.dsh-skin-galactic-opera :is(.dsh-skin-twinkle, .dsh-skin-nebula-core, .dsh-skin-orb, .dsh-skin-scanner, .dsh-skin-scanner-target, .dsh-skin-pulse),
body.dsh-skin-galactic-opera .dsh-skin-nebula-core::after,
body.dsh-skin-galactic-opera .dsh-skin-satellite::before,
body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit::before,
body.dsh-skin-galactic-opera .dsh-skin-satellite-orbit-front::before,
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor :is(.dsh-skin-twinkle, .dsh-skin-nebula-core, .dsh-skin-orb, .dsh-skin-scanner, .dsh-skin-scanner-target, .dsh-skin-pulse),
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor .dsh-skin-nebula-core::after,
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor .dsh-skin-satellite::before,
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor .dsh-skin-satellite-orbit::before,
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor .dsh-skin-satellite-orbit-front::before {
  border-radius: 50% !important;
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

body.dsh-skin-galactic-opera :is(.dsh-skin-energy, .dsh-skin-comet),
body.dsh-skin-galactic-opera .dsh-skin-scanner::after,
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor :is(.dsh-skin-energy, .dsh-skin-comet),
body.dsh-skin-galactic-opera #dsh-skin-galactic-opera-decor .dsh-skin-scanner::after {
  border-radius: 999px !important;
  border-top-left-radius: 999px !important;
  border-top-right-radius: 999px !important;
  border-bottom-right-radius: 999px !important;
  border-bottom-left-radius: 999px !important;
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

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active :is(textarea, input, [contenteditable]:not([contenteditable="false"])):hover,
body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active :is(textarea, input, [contenteditable]:not([contenteditable="false"])):focus,
body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active :is(textarea, input, [contenteditable]:not([contenteditable="false"])):focus-within {
  outline: none !important;
  box-shadow: none !important;
}

body.dsh-skin-galactic-opera ::selection {
  color: #03040b;
  background: rgba(255, 207, 92, 0.86);
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-source-hidden {
  opacity: 0 !important;
  pointer-events: none !important;
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
  overflow: hidden;
  padding: 19px 12px 12px;
  border: 0;
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 14px);
  color: rgba(248,251,255,0.92);
  background: transparent;
  box-shadow: none;
  pointer-events: none;
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active .dsh-skin-telemetry-panel {
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 14px);
}

body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active .dsh-skin-telemetry-panel::after {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel[data-collapsed="true"] {
  width: 24px;
  min-height: 24px;
  padding: 0;
  border-color: transparent;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel[data-collapsed="true"]::before,
body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel[data-collapsed="true"]::after,
body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel[data-collapsed="true"] .dsh-skin-telemetry-content {
  display: none !important;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-panel::before {
  content: "TELEMETRY";
  position: absolute;
  z-index: 1;
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
  z-index: 0;
  inset: 0;
  border: 1px solid rgba(125,227,255,0.48);
  border-left-color: rgba(255,207,92,0.62);
  border-bottom-color: rgba(255,71,120,0.36);
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 14px);
  background:
    repeating-linear-gradient(90deg, transparent 0 18px, rgba(125,227,255,0.045) 19px, transparent 20px 36px),
    linear-gradient(90deg, rgba(125,227,255,0.10), transparent 30%, rgba(255,71,120,0.06)),
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

body.dsh-skin-galactic-opera .dsh-skin-telemetry-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-toggle[hidden] {
  display: none !important;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-toggle {
  position: fixed;
  right: max(18px, 2.4vmin);
  bottom: max(18px, 2.4vmin);
  z-index: 2147483645;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid rgba(255,207,92,0.78);
  border-left-color: rgba(125,227,255,0.54);
  border-top-color: rgba(125,227,255,0.32);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  cursor: pointer;
  pointer-events: auto;
  color: transparent;
  background:
    linear-gradient(135deg, transparent 0 43%, rgba(7,12,32,0.88) 44% 100%),
    radial-gradient(circle at 72% 74%, rgba(255,207,92,0.98), rgba(125,227,255,0.72) 38%, rgba(255,71,120,0.34) 68%, transparent 72%);
  box-shadow:
    0 0 0 1px rgba(3,4,11,0.48),
    0 0 18px rgba(125,227,255,0.42),
    inset -5px -5px 13px rgba(255,207,92,0.18) !important;
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-toggle::before {
  content: "";
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 7px;
  height: 7px;
  border-right: 2px solid rgba(248,251,255,0.95);
  border-bottom: 2px solid rgba(248,251,255,0.95);
  filter: drop-shadow(0 0 5px rgba(255,207,92,0.82));
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-toggle[data-collapsed="true"]::before {
  right: 7px;
  bottom: 7px;
  border-right: 0;
  border-bottom: 0;
  border-left: 2px solid rgba(248,251,255,0.95);
  border-top: 2px solid rgba(248,251,255,0.95);
}

body.dsh-skin-galactic-opera .dsh-skin-telemetry-toggle:hover {
  box-shadow:
    0 0 0 1px rgba(255,207,92,0.62),
    0 0 24px rgba(255,207,92,0.52),
    0 0 38px rgba(125,227,255,0.30),
    inset -5px -5px 15px rgba(255,207,92,0.26) !important;
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
  0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.97) rotate(0deg); }
  50% { opacity: 0.28; transform: translate(-50%, -50%) scale(1.03) rotate(5deg); }
}

@keyframes dsh-skin-blackhole-infall {
  0% { opacity: 0; transform: rotate(-16deg) scale(1.12); }
  18% { opacity: 0.22; }
  64% { opacity: 0.12; transform: rotate(20deg) scale(0.78); }
  100% { opacity: 0; transform: rotate(32deg) scale(0.60); }
}

@keyframes dsh-skin-blackhole-warp-pull {
  0% { opacity: 0.24; transform: translate(-50%, -50%) scale(1) rotate(0deg); filter: blur(0.55px) saturate(1.22); }
  16% { opacity: 0.34; transform: translate(-50%, -50%) scale(0.88) rotate(-8deg); filter: blur(0.42px) saturate(1.55) brightness(1.12); }
  46% { opacity: 0.40; transform: translate(-50%, -50%) scale(1.12) rotate(12deg); filter: blur(0.38px) saturate(1.62) brightness(1.18); }
  100% { opacity: 0.24; transform: translate(-50%, -50%) scale(1.02) rotate(0deg); filter: blur(0.55px) saturate(1.22); }
}

@keyframes dsh-skin-blackhole-infall-burst {
  0% { opacity: 0; transform: rotate(-24deg) scale(1.42); }
  18% { opacity: 0.62; transform: rotate(10deg) scale(0.72); }
  42% { opacity: 0.48; transform: rotate(26deg) scale(0.50); }
  100% { opacity: 0; transform: rotate(58deg) scale(0.34); }
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

@keyframes dsh-skin-scanner-target-double-ping {
  0%, 100% { transform: translate(-50%, -50%) scale(0.72); opacity: 0.04; }
  12%, 42% { transform: translate(-50%, -50%) scale(1.24); opacity: 1; }
  27%, 57% { transform: translate(-50%, -50%) scale(0.86); opacity: 0.34; }
  72% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.82; }
}

@keyframes dsh-skin-click-pulse {
  0% { opacity: 0.92; width: 12px; height: 12px; filter: brightness(1.45); }
  65% { opacity: 0.34; }
  100% { opacity: 0; width: 132px; height: 132px; filter: brightness(0.8); }
}

@keyframes dsh-skin-galactic-opera-hyperspace-burst {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.82) rotate(-8deg); filter: blur(0.8px) brightness(0.82); }
  12% { opacity: 0.88; transform: translate(-50%, -50%) scale(0.24) rotate(0deg); filter: blur(0.2px) brightness(1.52); }
  28% { opacity: 0.9; transform: translate(-50%, -50%) scale(0.42) rotate(4deg); filter: blur(0.12px) brightness(1.36); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5) rotate(12deg); filter: blur(0.4px) brightness(0.9); }
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

		const DECOR_MARKUP = [
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

		function getDecorShadowCss() {
			return `${CSS
				.replace(/body\.dsh-skin-galactic-opera\.dsh-skin-galactic-opera-input-active\s+/g, ":host-context(body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-input-active) ")
				.replace(/body\.dsh-skin-galactic-opera\.dsh-skin-galactic-opera-hyperspace\s+/g, ":host-context(body.dsh-skin-galactic-opera.dsh-skin-galactic-opera-hyperspace) ")
				.replace(/body\.dsh-skin-galactic-opera\s+/g, "")}

.dsh-skin-galactic-opera-decor {
  position: absolute !important;
  inset: 0 !important;
  width: auto !important;
  height: auto !important;
  z-index: auto !important;
}
`;
		}

		function setImportantStyle(element, name, value) {
			if (element instanceof HTMLElement) element.style.setProperty(name, value, "important");
		}

		function hardenDecorHost(decor) {
			setImportantStyle(decor, "position", "fixed");
			setImportantStyle(decor, "inset", "-2vmax");
			setImportantStyle(decor, "z-index", "2147483645");
			setImportantStyle(decor, "pointer-events", "none");
			setImportantStyle(decor, "overflow", "hidden");
			setImportantStyle(decor, "mix-blend-mode", "screen");
			setImportantStyle(decor, "display", "block");
			setImportantStyle(decor, "width", "auto");
			setImportantStyle(decor, "height", "auto");
			setImportantStyle(decor, "border", "0");
			setImportantStyle(decor, "border-radius", "0");
			setImportantStyle(decor, "border-top-left-radius", "0");
			setImportantStyle(decor, "border-top-right-radius", "0");
			setImportantStyle(decor, "border-bottom-right-radius", "0");
			setImportantStyle(decor, "border-bottom-left-radius", "0");
			setImportantStyle(decor, "background", "transparent");
		}

		function getDecorRoot(decor) {
			return decor?.shadowRoot ?? decor;
		}

		function getDecorLayer(decor) {
			const root = getDecorRoot(decor);
			return root?.querySelector?.(".dsh-skin-galactic-opera-decor") ?? root;
		}

		function hardenDecorGeometry(decor) {
			const root = getDecorRoot(decor);
			if (root === undefined || root === null) return;
			const roundSelector = ".dsh-skin-twinkle, .dsh-skin-nebula-core, .dsh-skin-orb, .dsh-skin-scanner, .dsh-skin-scanner-target";
			for (const element of root.querySelectorAll(roundSelector)) {
				setImportantStyle(element, "border-radius", "50%");
				setImportantStyle(element, "overflow", "visible");
				setImportantStyle(element, "box-sizing", "border-box");
			}
			for (const element of root.querySelectorAll(".dsh-skin-energy, .dsh-skin-comet")) {
				setImportantStyle(element, "border-radius", "999px");
				setImportantStyle(element, "overflow", "visible");
				setImportantStyle(element, "box-sizing", "border-box");
			}
		}

		function populateDecor(decor) {
			if (typeof decor.attachShadow === "function") {
				const shadow = decor.shadowRoot ?? decor.attachShadow({ mode: "open" });
				shadow.replaceChildren();
				decor.replaceChildren();
				const style = document.createElement("style");
				style.textContent = getDecorShadowCss();
				const layer = document.createElement("div");
				layer.className = "dsh-skin-galactic-opera-decor";
				layer.innerHTML = DECOR_MARKUP;
				shadow.append(style, layer);
			} else {
				decor.innerHTML = DECOR_MARKUP;
			}
			hardenDecorGeometry(decor);
		}

		function ensureDecor() {
			if (typeof document === "undefined") return undefined;
			let decor = document.getElementById(DECOR_ID);
			if (decor instanceof HTMLDivElement) {
				decor.className = DECOR_HOST_CLASS;
				decor.setAttribute("aria-hidden", "true");
				decor.dataset.plugin = PLUGIN_ID;
				hardenDecorHost(decor);
				populateDecor(decor);
				return decor;
			}
			decor = document.createElement("div");
			decor.id = DECOR_ID;
			decor.className = DECOR_HOST_CLASS;
			decor.setAttribute("aria-hidden", "true");
			decor.dataset.plugin = PLUGIN_ID;
			hardenDecorHost(decor);
			populateDecor(decor);
			document.body.appendChild(decor);
			return decor;
		}

		const EDITABLE_CONTENT_SELECTOR = `[contenteditable]:not([contenteditable="false"])`;
		let reducedMotionQuery;
		let reducedMotionMatches = false;
		let reducedMotionListener;

		function isReducedMotion() {
			if (typeof matchMedia === "undefined") return false;
			if (reducedMotionQuery === undefined) {
				reducedMotionQuery = matchMedia("(prefers-reduced-motion: reduce)");
				reducedMotionMatches = reducedMotionQuery.matches;
				reducedMotionListener = (event) => { reducedMotionMatches = event.matches; };
				if (typeof reducedMotionQuery.addEventListener === "function") reducedMotionQuery.addEventListener("change", reducedMotionListener);
				else if (typeof reducedMotionQuery.addListener === "function") reducedMotionQuery.addListener(reducedMotionListener);
			}
			return reducedMotionMatches;
		}

		function disposeReducedMotionCache() {
			if (reducedMotionQuery !== undefined && reducedMotionListener !== undefined) {
				if (typeof reducedMotionQuery.removeEventListener === "function") reducedMotionQuery.removeEventListener("change", reducedMotionListener);
				else if (typeof reducedMotionQuery.removeListener === "function") reducedMotionQuery.removeListener(reducedMotionListener);
			}
			reducedMotionQuery = undefined;
			reducedMotionMatches = false;
			reducedMotionListener = undefined;
		}

		function isEditableTarget(target) {
			if (!(target instanceof Element)) return false;
			const tag = target.tagName.toLowerCase();
			return tag === "input" || tag === "textarea" || tag === "select" || target.closest(EDITABLE_CONTENT_SELECTOR) !== null;
		}

		function isInstructionInputTarget(target) {
			if (!(target instanceof Element)) return false;
			const tag = target.tagName.toLowerCase();
			return tag === "textarea" || target.closest(EDITABLE_CONTENT_SELECTOR) !== null;
		}

		function isLikelySendButton(target) {
			if (!(target instanceof Element)) return false;
			const button = target.closest("button");
			if (!(button instanceof HTMLButtonElement)) return false;
			const form = button.closest("form");
			if (form !== null && form.querySelector(`textarea, ${EDITABLE_CONTENT_SELECTOR}`) !== null && button.type === "submit") return true;
			const label = `${button.getAttribute("aria-label") ?? ""} ${button.getAttribute("title") ?? ""} ${button.textContent ?? ""}`.toLowerCase();
			return /send|submit|发送|提交|送出|传送/.test(label);
		}

		function installInteractions(decor) {
			if (typeof document === "undefined" || typeof window === "undefined" || decor === undefined) return () => {};
			let frame = 0;
			let latestX = window.innerWidth / 2;
			let latestY = window.innerHeight / 2;
			let lastParallaxX = "";
			let lastParallaxY = "";
			let pulseIndex = 0;
			let hyperspaceTimer;
			let inputFocusTimer;
			let scannerPingTimer;
			let lastHyperspaceAt = 0;
			const decorRoot = getDecorRoot(decor);
			const decorLayer = getDecorLayer(decor);
			const scanner = decorRoot?.querySelector?.(".dsh-skin-scanner");
			const scannerTarget = decorRoot?.querySelector?.(".dsh-skin-scanner-target");
			const pulseColors = ["rgba(125,227,255,0.94)", "rgba(255,207,92,0.92)", "rgba(255,71,120,0.88)"];
			const updatePointer = () => {
				frame = 0;
				const nx = (latestX / Math.max(1, window.innerWidth) - 0.5) * 2;
				const ny = (latestY / Math.max(1, window.innerHeight) - 0.5) * 2;
				const nextParallaxX = `${Math.round(nx * -10)}px`;
				const nextParallaxY = `${Math.round(ny * -8)}px`;
				if (nextParallaxX !== lastParallaxX) {
					lastParallaxX = nextParallaxX;
					document.body.style.setProperty("--dsh-skin-parallax-x", nextParallaxX);
				}
				if (nextParallaxY !== lastParallaxY) {
					lastParallaxY = nextParallaxY;
					document.body.style.setProperty("--dsh-skin-parallax-y", nextParallaxY);
				}
			};
			const pingScannerAt = (clientX, clientY) => {
				if (!(scanner instanceof HTMLElement) || !(scannerTarget instanceof HTMLElement)) return;
				const rect = scanner.getBoundingClientRect();
				const scannerCenterX = rect.left + rect.width / 2;
				const scannerCenterY = rect.top + rect.height / 2;
				const viewportCenterX = window.innerWidth / 2;
				const viewportCenterY = window.innerHeight / 2;
				const dx = clientX - viewportCenterX;
				const dy = clientY - viewportCenterY;
				const distance = Math.hypot(dx, dy);
				const farthestX = dx >= 0 ? window.innerWidth - viewportCenterX : viewportCenterX;
				const farthestY = dy >= 0 ? window.innerHeight - viewportCenterY : viewportCenterY;
				const maxDistance = Math.max(1, Math.hypot(farthestX, farthestY));
				const scannerRadius = Math.max(10, Math.min(rect.width, rect.height) * 0.38);
				const projectedRadius = Math.min(1, distance / maxDistance) * scannerRadius;
				const angle = Math.atan2(dy, dx);
				document.body.style.setProperty("--dsh-skin-scanner-dot-x", `${Math.round(scannerCenterX + Math.cos(angle) * projectedRadius)}px`);
				document.body.style.setProperty("--dsh-skin-scanner-dot-y", `${Math.round(scannerCenterY + Math.sin(angle) * projectedRadius)}px`);
				scannerTarget.removeAttribute("data-ping");
				// Force the double-flash animation to restart on repeated clicks at the same point.
				void scannerTarget.offsetWidth;
				scannerTarget.dataset.ping = "true";
				window.clearTimeout(scannerPingTimer);
				scannerPingTimer = window.setTimeout(() => {
					scannerTarget.removeAttribute("data-ping");
				}, 700);
			};
			const isTypingActive = () => document.activeElement instanceof Element && isEditableTarget(document.activeElement);
			const setInputActive = (active) => {
				window.clearTimeout(inputFocusTimer);
				if (active) {
					document.body.classList.add("dsh-skin-galactic-opera-input-active");
				} else {
					inputFocusTimer = window.setTimeout(() => {
						document.body.classList.remove("dsh-skin-galactic-opera-input-active");
					}, 160);
				}
			};
			const onPointerMove = (event) => {
				if (isReducedMotion() || isTypingActive()) return;
				const dx = event.clientX - latestX;
				const dy = event.clientY - latestY;
				if (frame === 0 && dx * dx + dy * dy < 9) return;
				latestX = event.clientX;
				latestY = event.clientY;
				if (frame === 0) frame = requestAnimationFrame(updatePointer);
			};
			const triggerHyperspace = () => {
				if (isReducedMotion()) return;
				const now = performance.now();
				if (now - lastHyperspaceAt < 1200) return;
				lastHyperspaceAt = now;
				document.body.classList.add("dsh-skin-galactic-opera-hyperspace");
				window.clearTimeout(hyperspaceTimer);
				hyperspaceTimer = window.setTimeout(() => {
					document.body.classList.remove("dsh-skin-galactic-opera-hyperspace");
				}, 900);
			};
			const onPointerDown = (event) => {
				if (isReducedMotion() || isEditableTarget(event.target)) return;
				const pulse = document.createElement("span");
				pulse.className = "dsh-skin-pulse";
				setImportantStyle(pulse, "border-radius", "50%");
				setImportantStyle(pulse, "box-sizing", "border-box");
				pulse.style.setProperty("--dsh-skin-pulse-x", `${event.clientX}px`);
				pulse.style.setProperty("--dsh-skin-pulse-y", `${event.clientY}px`);
				pulse.style.setProperty("--dsh-skin-pulse-color", pulseColors[pulseIndex % pulseColors.length]);
				pulseIndex += 1;
				if (decorLayer instanceof Element) decorLayer.appendChild(pulse);
				else decor.appendChild(pulse);
				const remove = () => { pulse.remove(); };
				pulse.addEventListener("animationend", remove, { once: true });
				window.setTimeout(remove, 900);
				pingScannerAt(event.clientX, event.clientY);
				if (isLikelySendButton(event.target)) window.setTimeout(triggerHyperspace, 40);
			};
			const onKeyDown = (event) => {
				if (isReducedMotion() || event.isComposing) return;
				if (!isInstructionInputTarget(event.target)) return;
				if (event.code !== "Enter" || event.shiftKey || event.altKey) return;
				window.setTimeout(triggerHyperspace, 40);
			};
			const onFocusIn = (event) => {
				if (isEditableTarget(event.target)) setInputActive(true);
			};
			const onFocusOut = (event) => {
				if (isEditableTarget(event.target)) setInputActive(false);
			};
			updatePointer();
			document.addEventListener("pointermove", onPointerMove, { passive: true });
			document.addEventListener("pointerdown", onPointerDown, { passive: true });
			document.addEventListener("keydown", onKeyDown);
			document.addEventListener("focusin", onFocusIn);
			document.addEventListener("focusout", onFocusOut);
			if (isTypingActive()) setInputActive(true);
			return () => {
				document.removeEventListener("pointermove", onPointerMove);
				document.removeEventListener("pointerdown", onPointerDown);
				document.removeEventListener("keydown", onKeyDown);
				document.removeEventListener("focusin", onFocusIn);
				document.removeEventListener("focusout", onFocusOut);
				window.clearTimeout(inputFocusTimer);
				document.body.classList.remove("dsh-skin-galactic-opera-input-active");
				if (frame !== 0) cancelAnimationFrame(frame);
				if (scannerTarget instanceof HTMLElement) scannerTarget.removeAttribute("data-ping");
				window.clearTimeout(scannerPingTimer);
				window.clearTimeout(hyperspaceTimer);
				document.body.classList.remove("dsh-skin-galactic-opera-hyperspace");
				document.body.style.removeProperty("--dsh-skin-parallax-x");
				document.body.style.removeProperty("--dsh-skin-parallax-y");
				document.body.style.removeProperty("--dsh-skin-scanner-dot-x");
				document.body.style.removeProperty("--dsh-skin-scanner-dot-y");
			};
		}

		function installTelemetryPanel() {
			if (typeof document === "undefined" || typeof window === "undefined") return () => {};
			const telemetryPattern = /(?:\d[\d.,KkMm%/]*\s*轮\s*[·•]?\s*\d[\d.,KkMm%/]*\s*步)|(?:\d[\d.,KkMm%/]*\s*(?:rounds?|turns?)\s*[·•]?\s*\d[\d.,KkMm%/]*\s*steps?)|LLM\b|工具调用|(?:首\s*)?(?:token|tokens|tok|toks)\s*平均|(?:token|tokens|tok|toks)\/s|缓存命中|缓存|cache\b|cached\b|输入|输出|prompt\b|completion\b/i;
			const skipSelector = `#${DECOR_ID}, style, script, textarea, input, select, button, [role=button], [aria-haspopup], ${EDITABLE_CONTENT_SELECTOR}, [role=dialog], [role=menu], [role=listbox], [role=tooltip], [popover], .dsh-skin-pulse, .dsh-skin-telemetry-panel`;
			const editableDescendantSelector = `textarea, input, select, ${EDITABLE_CONTENT_SELECTOR}`;
			let currentSources = new Set();
			let lastText = "";
			let frame = 0;
			let forceTelemetryRescan = true;
			let telemetryRefreshesSinceFullScan = 0;
			const TELEMETRY_UPDATE_DELAY = 300;
			const TELEMETRY_FULL_RESCAN_UPDATES = 7;
			let collapsed = false;
			try {
				collapsed = window.localStorage?.getItem("dsh-skin-galactic-opera:telemetry-collapsed") === "true";
			} catch {
				collapsed = false;
			}
			const panel = document.createElement("div");
			panel.className = "dsh-skin-telemetry-panel";
			panel.setAttribute("aria-hidden", "true");
			panel.hidden = true;
			const content = document.createElement("div");
			content.className = "dsh-skin-telemetry-content";
			const rowMetrics = Array.from({ length: 5 }, () => {
				const row = document.createElement("div");
				row.className = "dsh-skin-telemetry-row";
				row.hidden = true;
				const metric = document.createElement("span");
				metric.className = "dsh-skin-telemetry-value dsh-skin-telemetry-value-full";
				row.append(metric);
				content.append(row);
				return { row, metric };
			});
			panel.append(content);
			const toggle = document.createElement("button");
			toggle.type = "button";
			toggle.className = "dsh-skin-telemetry-toggle";
			toggle.hidden = true;
			document.body.append(panel, toggle);
			const skinMutationSelector = `#${DECOR_ID}, .dsh-skin-pulse, .dsh-skin-telemetry-panel, .dsh-skin-telemetry-toggle`;
			const isSkippable = (element) => element.closest(skipSelector) !== null;
			const hasEditableDescendant = (element) => element.querySelector(editableDescendantSelector) !== null;
			const normalizeTelemetryText = (text) => text.replace(/\s+/g, " ").trim();
			const getTelemetryProbeText = (element) => normalizeTelemetryText(element.textContent || "");
			const getTelemetryText = (element) => normalizeTelemetryText(element.innerText || element.textContent || "");
			const getMutationElement = (node) => node instanceof Element ? node : node.parentElement;
			const isSkinOwnedNode = (node) => getMutationElement(node)?.closest(skinMutationSelector) !== null;
			const isSkinOwnedMutation = (mutation) => {
				if (isSkinOwnedNode(mutation.target)) return true;
				let touched = false;
				for (const node of mutation.addedNodes) {
					touched = true;
					if (!isSkinOwnedNode(node)) return false;
				}
				for (const node of mutation.removedNodes) {
					touched = true;
					if (!isSkinOwnedNode(node)) return false;
				}
				return touched;
			};
			const getCandidateInfo = (element) => {
				if (!(element instanceof HTMLElement) || isSkippable(element) || hasEditableDescendant(element)) return undefined;
				const rect = element.getBoundingClientRect();
				const compactBottomBar = rect.height <= 46 && rect.width <= window.innerWidth && rect.bottom > window.innerHeight - 150;
				if (rect.width < 12 || rect.height < 8 || (!compactBottomBar && rect.width > Math.min(620, window.innerWidth * 0.72)) || rect.height > 86) return undefined;
				if (rect.bottom < window.innerHeight - 170) return undefined;
				const text = getTelemetryProbeText(element);
				if (text.length < 2 || text.length > 360 || !telemetryPattern.test(text) || !/\d/.test(text)) return undefined;
				if (/设置\s+设置\s+通用设置|Cmd\/Ctrl\+Enter|使用另一行|排队发送|Agent\s+预设/i.test(text)) return undefined;
				let score = compactBottomBar ? 4 : 1;
				if (rect.bottom > window.innerHeight - 72) score += 3;
				if (rect.right > window.innerWidth * 0.45) score += 1;
				if (/token|tokens|tok|toks/i.test(text)) score += 3;
				if (/调用|消耗|上下文|usage|context|缓存|命中|输入|输出/i.test(text)) score += 2;
				if (/轮次|轮|步骤|步数|步|steps?|rounds?|turns?/i.test(text)) score += 2;
				if (/[·•|；;]/.test(text)) score += 2;
				return { element, rect, score, text };
			};
			const chooseTelemetryElements = () => {
				const xs = [0.10, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 0.94];
				const ys = [18, 38, 62, 90, 122, 150];
				const candidates = new Map();
				const temporarilyRestoredSources = [...currentSources].filter((source) => source.classList.contains("dsh-skin-telemetry-source-hidden"));
				// elementsFromPoint ignores pointer-events:none. Temporarily restore the previous source
				// during the same JS task so full rescans do not miss the hidden native bottom bar.
				for (const source of temporarilyRestoredSources) source.classList.remove("dsh-skin-telemetry-source-hidden");
				try {
					for (const xRatio of xs) for (const yOffset of ys) {
						const x = window.innerWidth * xRatio;
						const y = window.innerHeight - yOffset;
						if (y < 0) continue;
						for (const base of document.elementsFromPoint(x, y)) {
							let element = base;
							for (let depth = 0; element instanceof HTMLElement && depth < 8; depth += 1, element = element.parentElement) {
								const candidate = getCandidateInfo(element);
								if (candidate !== undefined) {
									const previous = candidates.get(element);
									if (previous === undefined || candidate.score > previous.score) candidates.set(element, candidate);
								}
							}
						}
					}
				} finally {
					for (const source of temporarilyRestoredSources) if (source.isConnected) source.classList.add("dsh-skin-telemetry-source-hidden");
				}
				return [...candidates.values()]
					.sort((a, b) => b.score - a.score || a.rect.top - b.rect.top || a.rect.left - b.rect.left)
					.filter((candidate, index, entries) => !entries.slice(0, index).some(({ element: selected }) => selected.contains(candidate.element) || candidate.element.contains(selected)))
					.slice(0, 10)
					.sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left)
					.map(({ element }) => element);
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
				const isTokenAverage = (value) => /^(?:首\s*)?(?:token|tokens|tok|toks)\s*平均(?:\s|[:：]|\d|$)/i.test(value);
				const isTokenSpeedUnit = (value) => /^(?:token|tokens|tok|toks)\/s$/i.test(value);
				const isInputOnly = (value) => /^(?:输入|prompt\b)/i.test(value);
				const isOutputOnly = (value) => /^(?:输出|completion\b)/i.test(value);
				const isTelemetryRow = (value) => {
					if (!/\d/.test(value)) return false;
					if (/^\d{1,2}:\d{2}\b|\b\d{1,2}:\d{2}\b\s*[·•]|用时|发送|排队|Cmd\/Ctrl/i.test(value)) return false;
					return /(?:\d[\d.,KkMm%/]*\s*轮\s*[·•]?\s*\d[\d.,KkMm%/]*\s*步)|(?:\d[\d.,KkMm%/]*\s*(?:rounds?|turns?)\s*[·•]?\s*\d[\d.,KkMm%/]*\s*steps?)|^LLM\b|^工具调用|^(?:首\s*)?(?:token|tokens|tok|toks)\s*平均(?:\s|[:：]|\d|$)|^(?:缓存命中|缓存|cache\b|cached\b)|^(?:输入|输出|prompt\b|completion\b)/i.test(value);
				};
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
				const firstMatch = (predicate) => rows.find((row) => isTelemetryRow(row) && predicate(row));
				const roundRow = firstMatch((row) => /(?:\d[\d.,KkMm%/]*\s*轮\s*[·•]?\s*\d[\d.,KkMm%/]*\s*步)|(?:\d[\d.,KkMm%/]*\s*(?:rounds?|turns?)\s*[·•]?\s*\d[\d.,KkMm%/]*\s*steps?)/i.test(row));
				const llmRow = firstMatch((row) => /^LLM\b/i.test(row));
				const toolRow = firstMatch((row) => /^工具调用/i.test(row));
				const durationRow = llmRow !== undefined && toolRow !== undefined && !/工具调用/i.test(llmRow) ? `${llmRow} · ${toolRow}` : llmRow ?? toolRow;
				const firstTokenRow = firstMatch((row) => /^(?:首\s*)?(?:token|tokens|tok|toks)\s*平均(?:\s|[:：]|\d|$)/i.test(row));
				const cacheRow = firstMatch((row) => /^(?:缓存命中|缓存|cache\b|cached\b)/i.test(row));
				const inputOutputRow = firstMatch((row) => /^(?:输入|prompt\b)/i.test(row) && /(?:输出|completion\b)/i.test(row))
					?? (() => {
						const inputRow = firstMatch((row) => /^(?:输入|prompt\b)/i.test(row));
						const outputRow = firstMatch((row) => /^(?:输出|completion\b)/i.test(row));
						return inputRow !== undefined && outputRow !== undefined ? `${inputRow} · ${outputRow}` : inputRow ?? outputRow;
					})();
				const fixedRows = [roundRow, durationRow, firstTokenRow, cacheRow, inputOutputRow].filter(Boolean);
				return fixedRows.slice(0, 5);
			};
			const setCollapsed = (nextCollapsed) => {
				collapsed = nextCollapsed;
				panel.dataset.collapsed = String(collapsed);
				toggle.dataset.collapsed = String(collapsed);
				toggle.setAttribute("aria-expanded", String(!collapsed));
				toggle.setAttribute("aria-label", collapsed ? "展开 telemetry 面板" : "收缩 telemetry 面板");
				toggle.title = collapsed ? "展开 telemetry 面板" : "收缩 telemetry 面板";
				try {
					window.localStorage?.setItem("dsh-skin-galactic-opera:telemetry-collapsed", String(collapsed));
				} catch {
					// Storage may be unavailable in private or restricted contexts.
				}
			};
			setCollapsed(collapsed);
			toggle.addEventListener("click", (event) => {
				event.preventDefault();
				event.stopPropagation();
				setCollapsed(!collapsed);
			});
			const renderPanel = (telemetryText) => {
				const rows = splitTelemetryRows(telemetryText);
				panel.hidden = rows.length === 0;
				toggle.hidden = rows.length === 0;
				rowMetrics.forEach(({ row, metric }, index) => {
					const rowText = rows[index] ?? "";
					row.hidden = rowText === "";
					if (metric.textContent !== rowText) metric.textContent = rowText;
				});
			};
			const isTelemetryPaused = () => document.activeElement instanceof Element && isInstructionInputTarget(document.activeElement);
			const getSourcesText = (sources) => [...sources].map(getTelemetryText).filter(Boolean).join(" | ");
			const areCachedSourcesUsable = () => {
				if (currentSources.size === 0) return false;
				const sources = [...currentSources];
				if (!sources.every((source) => source.isConnected && getCandidateInfo(source) !== undefined)) return false;
				return splitTelemetryRows(getSourcesText(currentSources)).length > 0;
			};
			const update = () => {
				frame = 0;
				if (isTelemetryPaused()) return;
				let nextSources = currentSources;
				let text = getSourcesText(nextSources);
				const needsFullScan = forceTelemetryRescan || telemetryRefreshesSinceFullScan >= TELEMETRY_FULL_RESCAN_UPDATES || !areCachedSourcesUsable();
				if (needsFullScan) {
					nextSources = new Set(chooseTelemetryElements());
					text = getSourcesText(nextSources);
					for (const source of currentSources) if (!nextSources.has(source)) source.classList.remove("dsh-skin-telemetry-source-hidden");
					for (const source of nextSources) if (!currentSources.has(source)) source.classList.add("dsh-skin-telemetry-source-hidden");
					currentSources = nextSources;
					forceTelemetryRescan = false;
					telemetryRefreshesSinceFullScan = 0;
				} else {
					telemetryRefreshesSinceFullScan += 1;
				}
				if (text === lastText) return;
				lastText = text;
				renderPanel(text);
			};
			const schedule = () => {
				if (isTelemetryPaused()) return;
				if (frame === 0) frame = window.setTimeout(update, TELEMETRY_UPDATE_DELAY);
			};
			const onTelemetryFocusIn = (event) => {
				if (!isInstructionInputTarget(event.target)) return;
				if (frame !== 0) {
					window.clearTimeout(frame);
					frame = 0;
				}
			};
			const onTelemetryFocusOut = (event) => {
				if (isInstructionInputTarget(event.target)) window.setTimeout(schedule, 240);
			};
			const onTelemetryResize = () => {
				forceTelemetryRescan = true;
				schedule();
			};
			const observer = typeof MutationObserver === "undefined" ? undefined : new MutationObserver((mutations) => {
				if (mutations.every(isSkinOwnedMutation)) return;
				schedule();
			});
			schedule();
			observer?.observe(document.body, { childList: true, subtree: true, characterData: true });
			window.addEventListener("resize", onTelemetryResize, { passive: true });
			document.addEventListener("focusin", onTelemetryFocusIn);
			document.addEventListener("focusout", onTelemetryFocusOut);
			return () => {
				observer?.disconnect();
				window.removeEventListener("resize", onTelemetryResize);
				document.removeEventListener("focusin", onTelemetryFocusIn);
				document.removeEventListener("focusout", onTelemetryFocusOut);
				if (frame !== 0) window.clearTimeout(frame);
				for (const source of currentSources) source.classList.remove("dsh-skin-telemetry-source-hidden");
				toggle.remove();
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
					disposeReducedMotionCache();
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
