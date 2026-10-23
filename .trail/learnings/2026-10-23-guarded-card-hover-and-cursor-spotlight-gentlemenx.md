---
title: Guarded card hover and cursor spotlight
author: GentlemenX
date: 2026-10-23
branch: main
touches:
  - app.js
  - styles.css
  - Pirate-Reborn-Guidebook.apk.previous
  - README.md
  - android/.gitignore
  - android/app/.gitignore
  - android/app/build.gradle
  - android/app/capacitor.build.gradle
  - android/app/proguard-rules.pro
  - android/app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java
---

## Decided
- Guard hover-only card lift, button and row tint, and pointer spotlight behind hover-capability media queries.
- Update cursor coordinates through one requestAnimationFrame callback and draw the dark-card spotlight as a pointer-transparent border overlay.

## Tried and ruled out
- Unthrottled pointermove style writes; use one update per display frame.

## Watch out
- Site styles are in styles.css and runtime-rendered cards are in app.js; the Trail graph may not index these files, so raw search is the fallback after a no-hit graph query.
