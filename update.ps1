$files = Get-ChildItem "d:\pdr\pdrworld\*.html"

foreach ($file in $files) {
    $content = Get-Content -Raw $file.FullName
    $originalContent = $content

    $content = $content -replace '--bg:#07008F; --bg-2:#07008F; --bg-3:#0a0399;', '--bg:#0F172A; --bg-2:#0F172A; --bg-3:#1E293B;'
    $content = $content -replace '--surface-2:#FAFAFA;', '--surface-2:#F8FAFC;'
    $content = $content -replace '--accent:#4A9FD8; --accent-2:#3a8fc8; --accent-soft:rgba\(74,159,216,\.12\);', '--accent:#0284C7; --accent-2:#0369A1; --accent-soft:rgba(2,132,199,.12);'
    $content = $content -replace '--ink:#07008F; --ink-2:#07008F;', '--ink:#0F172A; --ink-2:#1E293B;'
    $content = $content -replace '--color-brand:#07008F;', '--color-brand:#0F172A;'
    $content = $content -replace '--color-accent:#4A9FD8;', '--color-accent:#0284C7;'
    $content = $content -replace 'color:#07008F\}', 'color:var(--ink)}'
    $content = $content -replace 'padding:clamp\(72px,10vw,120px\) 0;', 'padding:clamp(56px,8vw,96px) 0;'
    $content = $content -replace 'margin-bottom:56px\}', 'margin-bottom:40px}'
    $content = $content -replace '--shadow:0 16px 40px -12px rgba\(0,0,0,\.12\);', '--shadow:0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.05);'
    $content = $content -replace '--shadow-lg:0 30px 80px -20px rgba\(0,0,0,\.25\);', '--shadow-lg:0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);'

    # Also fix some hardcoded colors that use `#07008F` directly in the markup, avoiding SVG paths if any.
    $content = $content -replace 'color:#07008F', 'color:var(--ink)'
    
    if ($content -cne $originalContent) {
        $content | Set-Content $file.FullName
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Finished batch update."
