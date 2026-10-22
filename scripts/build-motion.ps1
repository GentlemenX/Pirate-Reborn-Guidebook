$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Push-Location $projectRoot
try {
  & npm exec vite -- build --config vite.motion.config.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Vite motion bundle build failed.' }
  foreach ($file in @('motion.bundle.js', 'motion.bundle.css')) {
    $buildFile = if ($file -eq 'motion.bundle.css') { 'pirate-reborn-guidebook.css' } else { $file }
    $source = Join-Path $projectRoot "dist-motion/$buildFile"
    if (-not (Test-Path -LiteralPath $source)) { throw "Expected build output was not created: $source" }
    Copy-Item -LiteralPath $source -Destination (Join-Path $projectRoot $file) -Force
  }
  Remove-Item -LiteralPath (Join-Path $projectRoot 'dist-motion') -Recurse -Force
  Write-Output 'Built and copied the motion bundle.'
}
finally { Pop-Location }
