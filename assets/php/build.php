<?php
if (isset($_GET['opt']) && ($_GET['opt'] == 1)){
    require("assets/php/withDeck.php");
}
else if (isset($_GET['opt']) && ($_GET['opt'] == 2)){
    require("assets/php/randomDeck.php");
} 
else if (isset($_GET['opt']) && ($_GET['opt'] == 5)){
    require("assets/php/withDeck.php");
    echo '<script type="text/javascript"> let optionGame = "5"; </script>';
}
else if (isset($_GET['opt']) && ($_GET['opt'] == 6)){
    require("assets/php/randomDeck.php");
    echo '<script type="text/javascript"> 
    let optionGame = "6";
    </script>';
}
else{
    header( "refresh:4; url=index.php" ); 
    echo "<p>Erreur: redirection vers le menu en cours ...</p>";
    echo "<p><progress id='load' value='0' max='154'></progress></p>";
    echo '<script type="text/javascript"> 
    let meter = document.getElementById("load");
    console.log(meter);
    valueMeter=0;
    setInterval(()=>{valueMeter++
    meter.value=valueMeter},25);
    </script>';
    die();
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