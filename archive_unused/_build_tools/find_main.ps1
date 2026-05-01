foreach($f in @('about.html','products.html','solutions.html','resources.html','contact.html')){
  $c = Get-Content $f
  $s = 0; $e = 0
  for($i = 0; $i -lt $c.Count; $i++){
    if($c[$i] -match '<main'){ $s = $i + 1 }
    if($c[$i] -match '</main>'){ $e = $i + 1 }
  }
  Write-Host ('{0}: main={1}-{2} total={3}' -f $f, $s, $e, $c.Count)
}
