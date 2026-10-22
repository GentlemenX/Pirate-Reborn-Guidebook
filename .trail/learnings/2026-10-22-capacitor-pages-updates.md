# Capacitor offline-first Pages updates

## Decided
For Android live guidebook updates, keep the app's Capacitor local origin and update its local asset directory from the project's GitHub Pages bundle. This preserves offline startup and localStorage profile data. Publish a versioned manifest plus a SHA-256 checked ZIP with each Pages deployment.

## Tried and ruled out
Loading the public website directly as the Capacitor server URL would split local profile storage by origin and leave offline startup dependent on network access.

## Watch out
Ship a new APK once to add the native updater. Future website deployments can update that installed client on its next launch. Keep the bundle URL pinned to the project Pages host, enforce archive path and size limits, and never package personal profile exports in the public update ZIP.
