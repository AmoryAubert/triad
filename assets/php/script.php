<?php
$player1="";
$x=1;
$file_handle = fopen("assets/txt/choose1.txt","rb");
while (!feof($file_handle) ) {
    $line_of_text = fgets($file_handle);
    $parts = explode(',', $line_of_text);
    $search = trim($parts[0],"\r\n");
    //var_dump($search);
    $file_handle3 = file("assets/txt/cards.txt");
    foreach($file_handle3 as $line)
    {
        if(strpos($line, $search) !== false){
            $player1_line = $line;
            $parts2 = explode(',', $player1_line);
            $player1 .=
                '<div id="drag'.$x.'" class="img-container">
                    <img src="assets/img/'.$parts2[0].'.png" alt="'.$parts2[0].'" class="hand-card">
                    <p class="card-top">'.$parts2[1].'</p>
                    <p class="card-left">'.$parts2[2].'</p>
                    <p class="card-right">'.$parts2[3].'</p>
                    <p class="card-bottom">'.$parts2[4].'</p>
                </div>'; // draggable="true"
        }
    }
    $x++;
    //var_dump($player1);
}
fclose($file_handle);
$player2="";
$file_handle2 = fopen("assets/txt/choose2.txt","rb");
while (!feof($file_handle2) ) {
    $line_of_text = fgets($file_handle2);
    $parts = explode(',', $line_of_text);
    $search = trim($parts[0],"\r\n");
    //var_dump($search);
    $file_handle3 = file("assets/txt/cards.txt");
    foreach($file_handle3 as $line)
    {
        if(strpos($line, $search) !== false){
            $player2_line = $line;
            $parts2 = explode(',', $player2_line);
            $player2 .=
                '<div id="drag'.$x.'" class="img-container">
                    <img src="assets/img/'.$parts2[0].'.png" alt="'.$parts2[0].'" class="hand-card">
                    <p class="card-top">'.$parts2[1].'</p>
                    <p class="card-left">'.$parts2[2].'</p>
                    <p class="card-right">'.$parts2[3].'</p>
                    <p class="card-bottom">'.$parts2[4].'</p>
                </div>';// draggable="true"
        }
    }
    $x++;
}
fclose($file_handle2);
?>