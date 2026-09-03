# Changelog

All notable changes to this package will be documented in this file.

## 0.1.9 - 2026-09-03

### Changed

- Replaces the README with separate English and Simplified Chinese sections linked from a language switcher at the top.
- Refreshes the bottom-right telemetry HUD promptly when switching conversations or navigating between sessions.

### Fixed

- Keeps navigation-triggered telemetry refreshes active even when the instruction input still has focus.

## 0.1.8 - 2026-09-03

### Added

- Adds a subtle black-hole infall effect using a lightweight pseudo-element particle layer and a send-time pull animation.

### Changed

- Reduces idle black-hole animation cost by slowing the new infall layer, shrinking its paint area, lowering opacity, and removing animated filters.
- Keeps telemetry panel chrome clipped through the same cutout layer in both typing and idle states.

### Fixed

- Fixes telemetry panel cutout artifacts that could show a filled or rectangular top-left corner while typing.

## 0.1.7 - 2026-09-03

### Changed

- Moves the decorative visual layer into Shadow DOM to isolate scanner, planet, pulse, and black-hole geometry from DSH host style regressions.
- Keeps the input-mode black hole visually stable while still reducing high-motion distraction elsewhere.
- Aligns the hyperspace burst effect to the black-hole center after Shadow DOM isolation.

### Fixed

- Prevents Shadow DOM container nesting from shifting the scanner disk, planet, satellite orbit, and other decorative elements toward the viewport edges.

## 0.1.6 - 2026-08-28

### Changed

- Further reduces telemetry overhead by using cached candidate geometry, adding a bounded full-rescan TTL, increasing update debounce, and avoiding observer array allocations.
- Refines telemetry text extraction so hot-path probing uses lightweight text reads while rendered output preserves native visual spacing.
- Uses pointer movement distance thresholds for parallax updates instead of fixed time throttling.
- Reuses fixed telemetry row nodes and disables the telemetry backdrop blur while typing.

### Fixed

- Prevents occasional telemetry panel disappearance during full rescans by temporarily making hidden native telemetry sources discoverable to `elementsFromPoint`.

## 0.1.5 - 2026-08-28

### Added

- Scanner target now double-flashes at the clicked page position projected into the bottom-left scanner disk.
- Package metadata for repository, homepage, and issue reporting.

### Changed

- Optimizes telemetry rescan scheduling by ignoring skin-owned DOM mutations and reusing valid cached telemetry sources.
- Replaces the scanner target's continuous sweep polling with click-triggered pings.
- Caches the reduced-motion media query and tightens plugin-specific global state class names.
- Expands JavaScript syntax checks to include both client and host entries and runs them before publishing.

### Fixed

- Improves contenteditable detection, including empty and plaintext-only contenteditable controls.
- Prevents hidden telemetry source elements from intercepting pointer events.
- Narrows scrollbar styling to avoid a global universal selector.

## 0.1.4 - 2026-08-28

### Fixed

- Restores the top-right satellite's original 0.1.2 elliptical orbit behavior by excluding satellite and orbit animations from typing low-distraction pause rules.

## 0.1.3 - 2026-08-27

### Added

- Triangle collapse/expand control that complements the bottom-right telemetry panel corner cut and remembers its state.

### Changed

- Reduces visual and JavaScript activity while typing by pausing high-motion skin effects, scanner updates, pointer parallax, click pulses on editable controls, and telemetry rescans during active input.

## 0.1.2 - 2026-08-27

### Fixed

- Keeps model/context popovers above the skin overlay layer.
- Prevents the telemetry mirror from treating input-bar buttons, popovers, listboxes, and menus as telemetry sources.

## 0.1.1 - 2026-08-27

### Added

- Bottom-right HUD telemetry panel that mirrors global DSH session status in a fixed five-line layout: rounds/steps, LLM/tool time, first-token average and throughput, cache hit rate, and input/output token usage.

### Changed

- Preserves pipe-separated telemetry segments as complete information blocks.
- Filters nearby message-level timing and settings/menu text from the telemetry panel.

## 0.1.0 - 2026-08-27

Initial public package version.

### Added

- `galactic-opera` dark theme registration for DSH Web GUI.
- Space-opera visual layer with star fields, hyperspace lanes, black-hole accretion disk, planet, moon, satellite orbit, scanner HUD, route map, energy beams, comets, V-shaped starfighters, and mission-briefing crawl.
- Pointer parallax, click pulse, hover glow, scanner target tracking, and automatic hyperspace burst on message submission.
- Reduced-motion handling for users who prefer fewer animations.
