---
title: Wish banner mobile portrait selector
author: GentlemenX
date: 2026-10-22
branch: main
touches:
  - styles.css
  - Pirate-Reborn-Guidebook.apk.previous
  - README.md
  - android/.gitignore
  - android/app/.gitignore
  - android/app/build.gradle
  - android/app/capacitor.build.gradle
  - android/app/proguard-rules.pro
  - android/app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java
  - android/app/src/main/AndroidManifest.xml
---

## Decided
Wish banner portrait buttons must span both columns in the compact mobile card grid so the portrait fills the full image row.

## Tried and ruled out
The blank strip was not an image crop or asset issue; it came from the open-button selector missing the rendered class.

## Watch out
`renderWishBanner` emits `.tier-unit-open`, not `.wish-unit-open`. Keep mobile grid rules aligned with the actual generated class names.
