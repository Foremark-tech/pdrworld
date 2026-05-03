$files = Get-ChildItem "d:\pdr\pdrworld\*.html"

foreach ($file in $files) {
    $content = Get-Content -Raw $file.FullName
    $originalContent = $content

    # 1. Revert global colors back to #07008F
    $content = $content -replace '--bg:#0F172A; --bg-2:#0F172A; --bg-3:#1E293B;', '--bg:#07008F; --bg-2:#07008F; --bg-3:#0a0399;'
    $content = $content -replace '--ink:#0F172A; --ink-2:#1E293B;', '--ink:#07008F; --ink-2:#07008F;'
    $content = $content -replace '--color-brand:#0F172A;', '--color-brand:#07008F;'

    # 2. Update Footer CSS
    # From `.footer{background:#07008F;` to `.footer{background:#0F172A;`
    $content = $content -replace '\.footer\{background:#07008F;', '.footer{background:#0F172A;'

    # 3. Update Mega Menu CSS
    $oldMegaCss = [regex]::Escape('.mega a:hover{background:var(--surface-2);border-color:var(--line);color:var(--ink);transform: translateX(4px);}')
    $newMegaCss = '.mega a:hover{background:var(--surface-2);border-color:var(--line);color:var(--ink);transform: translateX(4px);}
    .mega a:hover strong{color:var(--accent)}
    .mega-foot{margin-top:16px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:center}
    .mega-foot a{display:inline-flex;align-items:center;padding:10px 24px;border-radius:99px;background:var(--surface-2);color:var(--ink);font-weight:700;font-size:14px;transition:all var(--dur-fast)}
    .mega-foot a:hover{background:var(--accent);color:#fff;transform:translateY(-2px)}'
    
    $oldMegaCss2 = [regex]::Escape('.mega a:hover strong{color:var(--accent)}')

    # Just replace the block safely. Let's target `.mega a:hover{` and replace the whole block if possible, but regex might be tricky.
    # A safer approach for CSS is to just append it before `/* Mobile */`
    $mobileMarker = '/* Mobile */'
    if ($content -notmatch '\.mega-foot\{') {
        $content = $content -replace '(/\* Mobile \*/)', ".mega-foot{margin-top:16px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:center}`n    .mega-foot a{display:inline-flex;align-items:center;padding:10px 24px;border-radius:99px;background:var(--surface-2);color:var(--ink);font-weight:700;font-size:14px;transition:all var(--dur-fast)}`n    .mega-foot a:hover{background:var(--accent);color:#fff;transform:translateY(-2px);border-color:transparent}`n`n    `$1"
    }

    # 4. Update Mega Menu HTML
    $oldMegaHtml = [regex]::Escape('<a href="products.html#tools" data-cat="tools"><strong>Maintenance Tools</strong><span>Cleavers &middot; Cleaners &middot; Splice Sleeves</span></a>
          </div>
        </div>')
    
    $newMegaHtml = '<a href="products.html#tools" data-cat="tools"><strong>Maintenance Tools</strong><span>Cleavers &middot; Cleaners &middot; Splice Sleeves</span></a>
          </div>
          <div class="mega-foot">
            <a href="products.html">View All Products &rarr;</a>
          </div>
        </div>'
    
    $content = $content -replace $oldMegaHtml, $newMegaHtml

    # In case previous regex didn't match perfectly, let's also try a more flexible regex for HTML
    $htmlPattern = '(?s)<a href="products\.html#tools"[^>]*><strong>Maintenance Tools.*?</div>\s*</div>'
    $htmlReplace = '<a href="products.html#tools" data-cat="tools"><strong>Maintenance Tools</strong><span>Cleavers &middot; Cleaners &middot; Splice Sleeves</span></a>
          </div>
          <div class="mega-foot">
            <a href="products.html">View All Products &rarr;</a>
          </div>
        </div>'
    if ($content -notmatch 'View All Products') {
        $content = $content -replace $htmlPattern, $htmlReplace
    }

    if ($content -cne $originalContent) {
        $content | Set-Content $file.FullName
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Finished Phase 3 script."
