# Changelog

All notable changes to this package will be documented in this file.

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
