<?php
$dispo = range(1, 18);
shuffle($dispo);
$file = fopen("assets/txt/random.txt","rb+");
for ($i = 0; $i < 10; $i++){
    if ($dispo[$i] < 10){
        $dispo[$i] = "f0".$dispo[$i];
    } else {
        $dispo[$i] = "f".$dispo[$i];
    }
    fwrite($file,$dispo[$i]);
    if ($i < 9){
        fwrite($file,PHP_EOL);
    }
}
fclose($file);
$file_handle = fopen("assets/txt/random.txt","rb");
