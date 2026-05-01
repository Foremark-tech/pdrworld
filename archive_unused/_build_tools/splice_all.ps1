$targets = @(
    @{ file = 'about.html'; source = 'about_main.html' },
    @{ file = 'solutions.html'; source = 'solutions_main.html' },
    @{ file = 'contact.html'; source = 'contact_main.html' },
    @{ file = 'resources.html'; source = 'resources_main.html' }
)

foreach($t in $targets) {
    $content = Get-Content -Path $t.file -Raw
    $lines = $content -split "`r`n|`n"
    
    $sourceContent = Get-Content -Path $t.source -Raw
    
    $start = 1045 - 1
    $end = 1052 - 1
    
    $newLines = @()
    for($i=0; $i -lt $start; $i++) {
        $newLines += $lines[$i]
    }
    $newLines += $sourceContent
    for($i=$end+1; $i -lt $lines.Length; $i++) {
        $newLines += $lines[$i]
    }
    
    Set-Content -Path $t.file -Value ($newLines -join "`n") -Encoding UTF8
    Write-Host "Replaced main in $($t.file). New line count: " (Get-Content $t.file).Length
}
