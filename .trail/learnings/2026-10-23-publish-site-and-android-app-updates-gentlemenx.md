---
title: publish-site-and-android-app-updates
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
Publish the static site through the existing Windows GitHub Pages workflow; it also builds and publishes the mobile live-update bundle used by installed apps. Keep Android project sources and the APK out of the public source repo unless a separate release channel is configured.

## Tried and ruled out
Committing the APK into the repository; the project README excludes it and .gitignore intentionally ignores it.

## Watch out
The deploy workflow has no APK release job. A freshly built APK needs a GitHub Release or another artifact upload path if it must be downloadable as a standalone binary.
