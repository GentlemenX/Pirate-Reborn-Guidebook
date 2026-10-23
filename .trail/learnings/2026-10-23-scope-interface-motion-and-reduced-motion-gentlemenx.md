---
title: scope-interface-motion-and-reduced-motion-overrides
author: GentlemenX
date: 2026-10-23
branch: main
touches:
  - app.js
  - index.html
  - styles.css
  - sw.js
  - Pirate-Reborn-Guidebook.apk.previous
  - README.md
  - android/.gitignore
  - android/app/.gitignore
  - android/app/build.gradle
  - android/app/capacitor.build.gradle
---

## Decided
Do not use blanket transition or reduced-motion duration overrides across every element. Keep interaction timing and reduced-motion behavior scoped to the finite components that need them so decorative loops and marquee timing remain intact.

## Tried and ruled out
A universal 220ms transition override plus a universal .01ms animation override.

## Watch out
Check animation-timeline effects and continuous shine/sparkle loops separately when adding motion preferences.
