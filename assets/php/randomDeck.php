<?php
$file = fopen("assets/txt/random.txt","wb+");
$dispo = range(1, 18);
shuffle($dispo);
for ($i = 0; $i < 5; $i++){
    if ($dispo[$i] < 10){
        $dispo[$i] = "f0".$dispo[$i];
    } else {
        $dispo[$i] = "f".$dispo[$i];
    }
    fwrite($file,$dispo[$i]);
    if ($i < 5){
        fwrite($file,PHP_EOL);
    }
}
$dispo = range(1, 18);
shuffle($dispo);
for ($i = 0; $i < 5; $i++){
    if ($dispo[$i] < 10){
        $dispo[$i] = "f0".$dispo[$i];
    } else {
        $dispo[$i] = "f".$dispo[$i];
    }
    fwrite($file,$dispo[$i]);
    if ($i < 4){
        fwrite($file,PHP_EOL);
    }
}
fclose($file);
$file_handle = fopen("assets/txt/random.txt","rb");
