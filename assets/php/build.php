<?php
if (isset($_GET['opt']) && ($_GET['opt'] == 1)){
  require("assets/php/withDeck.php");
}
else {
    require("assets/php/randomDeck.php");
}
$x=1;
$player1="";
$player2="";
while (!feof($file_handle) ) {
    $line_of_text = fgets($file_handle);
    $parts = explode(',', $line_of_text);
    $search = trim($parts[0],"\r\n");
    $file_handle3 = file("assets/txt/cards.txt");
    foreach($file_handle3 as $line)
    {
        if((strpos($line, $search) !== false) && ($x < 6)){
            $player_line = $line;
            $parts2 = explode(',', $player_line);
            $player1 .=
                '<div id="drag'.$x.'" class="img-container">
                    <img src="assets/img/'.$parts2[0].'.png" alt="'.$parts2[0].'" class="hand-card">
                    <p class="card-top">'.$parts2[1].'</p>
                    <p class="card-left">'.$parts2[2].'</p>
                    <p class="card-right">'.$parts2[3].'</p>
                    <p class="card-bottom">'.$parts2[4].'</p>
                </div>';
        } else if((strpos($line, $search) !== false) && ($x > 5)){
            $player_line = $line;
            $parts2 = explode(',', $player_line);
            $player2 .=
                '<div id="drag'.$x.'" class="img-container">
                    <img src="assets/img/'.$parts2[0].'.png" alt="'.$parts2[0].'" class="hand-card">
                    <p class="card-top">'.$parts2[1].'</p>
                    <p class="card-left">'.$parts2[2].'</p>
                    <p class="card-right">'.$parts2[3].'</p>
                    <p class="card-bottom">'.$parts2[4].'</p>
                </div>';
        }
    }
    $x++;
    //var_dump($player1);
}
fclose($file_handle);
?>