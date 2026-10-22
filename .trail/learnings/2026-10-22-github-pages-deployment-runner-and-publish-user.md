---
title: GitHub Pages deployment runner and publish scope
author: User
date: 2026-10-22
touches:
  - ".github/workflows/deploy-pages.yml"
  - app.js
  - artifact-placeholder-images/001.png
  - artifact-placeholder-images/002.png
  - artifact-placeholder-images/003.png
  - artifact-placeholder-images/004.png
  - artifact-placeholder-images/005.png
  - artifact-placeholder-images/006.png
  - artifact-placeholder-images/007.png
  - artifact-placeholder-images/008.png
---

## Decided
GitHub Pages deployment must use a Windows runner while the web packaging scripts invoke `powershell`. Publish only the website, image assets, motion build inputs, and Pages workflow; exclude Android builds, user profile exports, and local tooling data.

## Tried and ruled out
A Linux Actions runner is incompatible with the existing `copy:web` and `motion:build` package scripts, which call PowerShell directly.

## Watch out
The public repository contains the website and its bundled image assets. The deployment workflow still needs Pages source set to GitHub Actions in repository settings if the first push does not enable it automatically. `trail check` returned `not a git repository` even though `git rev-parse` and `trail status` recognize this worktree.
