$files = Get-ChildItem "d:\pdr\pdrworld\*.html"

foreach ($file in $files) {
    $content = Get-Content -Raw $file.FullName
    $originalContent = $content

    # 1. Update Shadows
    $content = $content -replace [regex]::Escape('--shadow:0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.05);'), '--shadow:0 8px 24px -4px rgba(15,23,42,0.06), 0 4px 12px -2px rgba(15,23,42,0.04);'
    $content = $content -replace [regex]::Escape('--shadow-lg:0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);'), '--shadow-lg:0 24px 60px -8px rgba(15,23,42,0.1), 0 12px 32px -4px rgba(15,23,42,0.06);'

    # 2. Update Footer
    $oldFooter = [regex]::Escape('.footer{background:#0F172A;color:#fff;padding:80px 0 0;border-top:1px solid var(--line-dark)}
    .footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:36px}
    .footer p,.footer a,.footer li{color:rgba(255,255,255,.72);font-size:13px;line-height:1.7;transition:color var(--dur-fast) var(--ease-in-out)}
    .footer a:hover{color:#4A9FD8}
    .footer h4{color:#fff;font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px}')

    $newFooter = '.footer{background:#0B1120;color:#fff;padding:80px 0 0;border-top:1px solid rgba(255,255,255,0.08);position:relative}
    .footer::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);opacity:0.3}
    .footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:48px}
    .footer p,.footer a,.footer li{color:#94A3B8;font-size:14px;line-height:1.7;transition:all var(--dur-fast) var(--ease-in-out)}
    .footer a:hover{color:#FFFFFF;text-shadow:0 0 12px rgba(255,255,255,0.25)}
    .footer h4{color:#F8FAFC;font-size:14px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:20px}'

    $content = $content -replace $oldFooter, $newFooter

    # 3. Update Mega Menu CSS
    $megaPattern = '(?s)\.mega\{position:absolute;top:calc\(100% \+ 16px\);left:50%;.*?\.mega-foot a:hover\{background:var\(--accent\);color:#fff;transform:translateY\(-2px\)\}'
    $megaReplace = '.mega{position:absolute;top:calc(100% + 16px);left:50%;transform:translateX(-50%) translateY(-10px);width:min(960px,95vw);background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:32px 32px 0;box-shadow:0 32px 80px -16px rgba(15,23,42,.15);opacity:0;pointer-events:none;transition:all var(--dur-smooth) var(--ease-smooth);visibility: hidden;}
    .has-mega:hover .mega, .has-mega.open .mega{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0);visibility: visible;}
    .mega-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 24px;margin-bottom:24px}
    .mega a{display:block;padding:16px;border-radius:12px;color:#475569;font-size:14px;font-weight:500;border:1px solid transparent;transition:all var(--dur-fast) var(--ease-in-out)}
    .mega a strong{display:block;font-family:''Manrope'',sans-serif;color:var(--ink);font-size:16px;font-weight:800;letter-spacing:-.01em;margin-bottom:6px}
    .mega a span{color:#64748B;font-size:13px;font-weight:400;line-height:1.4}
    .mega a:hover{background:var(--surface-2);border-color:var(--line);color:var(--ink);transform: translateX(4px);box-shadow:0 8px 24px -8px rgba(15,23,42,.05)}
    .mega a:hover strong{color:var(--accent)}
    .mega-foot{margin:0 -32px;padding:16px 32px;border-top:1px solid var(--line);background:#F8FAFC;display:flex;justify-content:center;border-radius:0 0 16px 16px}
    .mega-foot a{display:inline-flex;align-items:center;padding:12px 32px;border-radius:8px;background:#0F172A;color:#FFFFFF;font-weight:700;font-size:15px;transition:all var(--dur-fast);box-shadow:0 4px 12px rgba(15,23,42,.2)}
    .mega-foot a:hover{background:var(--accent);transform:translateY(-2px);box-shadow:0 8px 20px rgba(2,132,199,.3);border-color:transparent}'

    $content = $content -replace $megaPattern, $megaReplace

    # 4. Section Spacing
    $content = $content -replace '\.section\{padding:clamp\(56px,8vw,96px\) 0;position:relative;overflow:hidden\}', '.section{padding:clamp(48px,6vw,80px) 0;position:relative;overflow:hidden}'

    if ($content -cne $originalContent) {
        $content | Set-Content $file.FullName
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Finished Phase 4 script."
