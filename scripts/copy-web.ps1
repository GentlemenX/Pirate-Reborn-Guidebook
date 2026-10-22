$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$webRoot = Join-Path $projectRoot 'www'
$webFiles = @('index.html', 'startup.js', 'app.js', 'styles.css', 'motion.bundle.js', 'motion.bundle.css', 'manifest.webmanifest', 'icon.svg', 'sw.js')
New-Item -ItemType Directory -Force -Path $webRoot | Out-Null
$staleProfileBackup = Join-Path $webRoot 'app-profile-backup.json'
if (Test-Path -LiteralPath $staleProfileBackup) {
  $resolvedWebRoot = (Resolve-Path -LiteralPath $webRoot).Path.TrimEnd('\') + '\'
  $resolvedProfileBackup = (Resolve-Path -LiteralPath $staleProfileBackup).Path
  if (-not $resolvedProfileBackup.StartsWith($resolvedWebRoot, [StringComparison]::OrdinalIgnoreCase)) { throw 'Unexpected packaged profile backup path' }
  Remove-Item -LiteralPath $resolvedProfileBackup -Force
}
foreach ($file in $webFiles) {
  $source = Join-Path $projectRoot $file
  if (Test-Path -LiteralPath $source) { Copy-Item -LiteralPath $source -Destination (Join-Path $webRoot $file) -Force }
}
$placeholderImages = Join-Path $projectRoot 'unit-placeholder-images'
$webPlaceholderImages = Join-Path $webRoot 'unit-placeholder-images'
if (Test-Path -LiteralPath $webPlaceholderImages) {
  if ((Resolve-Path $webPlaceholderImages).Path -ne $webPlaceholderImages) { throw 'Unexpected web placeholder folder path' }
  Remove-Item -LiteralPath $webPlaceholderImages -Recurse -Force
}
if (Test-Path -LiteralPath $placeholderImages) { Copy-Item -LiteralPath $placeholderImages -Destination $webRoot -Recurse -Force }
$regularPlaceholderImages = Join-Path $projectRoot 'regular-unit-placeholder-images'
$webRegularPlaceholderImages = Join-Path $webRoot 'regular-unit-placeholder-images'
if (Test-Path -LiteralPath $webRegularPlaceholderImages) {
  if ((Resolve-Path $webRegularPlaceholderImages).Path -ne $webRegularPlaceholderImages) { throw 'Unexpected web regular unit placeholder folder path' }
  Remove-Item -LiteralPath $webRegularPlaceholderImages -Recurse -Force
}
if (Test-Path -LiteralPath $regularPlaceholderImages) { Copy-Item -LiteralPath $regularPlaceholderImages -Destination $webRoot -Recurse -Force }
$heroineImages = Join-Path $projectRoot 'heroine-placeholder-images'
$webHeroineImages = Join-Path $webRoot 'heroine-placeholder-images'
if (Test-Path -LiteralPath $webHeroineImages) {
  if ((Resolve-Path $webHeroineImages).Path -ne $webHeroineImages) { throw 'Unexpected web heroine folder path' }
  Remove-Item -LiteralPath $webHeroineImages -Recurse -Force
}
if (Test-Path -LiteralPath $heroineImages) { Copy-Item -LiteralPath $heroineImages -Destination $webRoot -Recurse -Force }
$artifactImages = Join-Path $projectRoot 'artifact-placeholder-images'
$webArtifactImages = Join-Path $webRoot 'artifact-placeholder-images'
if (Test-Path -LiteralPath $webArtifactImages) {
  if ((Resolve-Path $webArtifactImages).Path -ne $webArtifactImages) { throw 'Unexpected web artifact folder path' }
  Remove-Item -LiteralPath $webArtifactImages -Recurse -Force
}
if (Test-Path -LiteralPath $artifactImages) { Copy-Item -LiteralPath $artifactImages -Destination $webRoot -Recurse -Force }
$assets = Join-Path $projectRoot 'assets'
if (Test-Path -LiteralPath $assets) { Copy-Item -LiteralPath $assets -Destination $webRoot -Recurse -Force }
# User profile snapshots and their downloaded Discord photos belong only in a local APK build.
$profileBackup = Join-Path $webRoot 'app-profile-backup.json'
if (Test-Path -LiteralPath $profileBackup) {
  $resolvedWebRoot = (Resolve-Path -LiteralPath $webRoot).Path.TrimEnd('\') + '\'
  $resolvedProfileBackup = (Resolve-Path -LiteralPath $profileBackup).Path
  if (-not $resolvedProfileBackup.StartsWith($resolvedWebRoot, [StringComparison]::OrdinalIgnoreCase)) { throw 'Unexpected packaged profile backup path' }
  Remove-Item -LiteralPath $resolvedProfileBackup -Force
}
$profileImages = Join-Path $webRoot 'assets\profile-images'
if (Test-Path -LiteralPath $profileImages) {
  $resolvedAssetsRoot = (Resolve-Path -LiteralPath (Join-Path $webRoot 'assets')).Path.TrimEnd('\') + '\'
  $resolvedProfileImages = (Resolve-Path -LiteralPath $profileImages).Path.TrimEnd('\') + '\'
  if (-not $resolvedProfileImages.StartsWith($resolvedAssetsRoot, [StringComparison]::OrdinalIgnoreCase)) { throw 'Unexpected packaged profile image path' }
  Remove-Item -LiteralPath $resolvedProfileImages.TrimEnd('\') -Recurse -Force
}
Write-Output "Copied $($webFiles.Count) guidebook files and placeholder images into www/."
