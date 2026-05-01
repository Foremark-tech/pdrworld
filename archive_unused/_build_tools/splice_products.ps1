$target = 'products.html'
$parts = @('pr_main.html', 'pr_main2.html', 'pr_main3.html', 'pr_main4.html')

$fullMain = ''
foreach($p in $parts) {
    $fullMain += (Get-Content -Path $p -Raw) + "`n"
}
Set-Content -Path 'pr_full_main.html' -Value $fullMain -Encoding UTF8

$content = Get-Content -Path $target -Raw
$lines = $content -split "`r`n|`n"

$start = 1045 - 1
$end = 1052 - 1

$newLines = @()
for($i=0; $i -lt $start; $i++) {
    $newLines += $lines[$i]
}
$newLines += $fullMain
for($i=$end+1; $i -lt $lines.Length; $i++) {
    $newLines += $lines[$i]
}

Set-Content -Path 'products_final.html' -Value ($newLines -join "`n") -Encoding UTF8
Copy-Item -Path 'products_final.html' -Destination $target -Force

Write-Host "Replaced main in products.html. New line count: " (Get-Content $target).Length
