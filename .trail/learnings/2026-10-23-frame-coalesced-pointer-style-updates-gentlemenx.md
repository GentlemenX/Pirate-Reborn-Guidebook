---
title: Frame-coalesced pointer style updates
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
- The cursor spotlight may update CSS variables from pointermove when events are coalesced into a single requestAnimationFrame callback; this is bounded to one style write per display frame.
- The rejected approach is a synchronous style write for every pointer event, not frame-coalesced pointer feedback.

## Tried and ruled out
- Direct per-event style mutation, which can exceed the display refresh rate and waste work.

## Watch out
- Review the scheduling cadence before treating every pointermove-based style update as unthrottled; inspect the requestAnimationFrame boundary.
