---
title: publish-profile-free-debug-apk-when-requested
author: GentlemenX
date: 2026-10-23
branch: main
touches:
  - Pirate-Reborn-Guidebook.apk.previous
  - README.md
  - android/.gitignore
  - android/app/.gitignore
  - android/app/build.gradle
  - android/app/capacitor.build.gradle
  - android/app/proguard-rules.pro
  - android/app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java
  - android/app/src/main/AndroidManifest.xml
  - android/app/src/main/java/com/piratereborn/guidebook/GuidebookUpdatePlugin.java
---

## Decided
When the user explicitly asks to publish the standalone APK, a profile-free debug APK may be committed as a binary artifact while keeping Android source and profile exports excluded. Make clear that it is a debug build.

## Tried and ruled out
Adding Android project sources or any captain profile backup to the public website repository.

## Watch out
A debug APK is suitable for sideloading but is not a stable Play Store release; use the release signing key and a versioned GitHub Release for public long-term distribution.
