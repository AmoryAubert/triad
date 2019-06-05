<?php
  require("assets/php/script.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <title>Triad</title>
</head>
<body>
  <h1>Triad</h1>
  <div id="plateau">
    <div id="mainPlayer1">
      <?php echo $player1 ?>
    </div>
    <div id="jeu">
      <div id="zc1" class="zoneCarte"></div>
      <div id="zc2" class="zoneCarte"></div>
      <div id="zc3" class="zoneCarte"></div>
      <div id="zc4" class="zoneCarte"></div>
      <div id="zc5" class="zoneCarte"></div>
      <div id="zc6" class="zoneCarte"></div>
      <div id="zc7" class="zoneCarte"></div>
      <div id="zc8" class="zoneCarte"></div>
      <div id="zc9" class="zoneCarte"></div>
      <div id="vide"></div>
      <div id="scoreTab"></div>
    </div>
    <div id="mainPlayer2">
      <?php echo $player2 ?>
    </div>
  </div>
<script src="assets/js/script.js" type="text/javascript"></script>
</body>
</html>