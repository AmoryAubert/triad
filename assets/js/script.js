function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

play();

function play(){
  let playing = random(1,3);
  let image = document.getElementsByClassName("img-container");
  let zonePlayerOne = document.getElementById("mainPlayer1");
  let zonePlayerTwo = document.getElementById("mainPlayer2");
  let scoreTab = document.getElementById("scoreTab");
  let banner = document.getElementById("vide");
  let cardDrop;
  let playedCard = 0;
  let blueScore;
  let redScore;
  let win;
  let tableCard = [
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1],
          [-1,-1,-1,-1]
  ];

  setDraggable();

  function setDraggable(){
    if (playing == 1){
      for (let i=0; i < 5; i++){
        image[i].setAttribute("draggable","true");
        zonePlayerOne.style.background = "url('assets/img/palet1.png') no-repeat left top";
        zonePlayerOne.style.animation = "palet1 1.5s forwards";
      }
      for (let i=5; i < 10; i++){
        image[i].setAttribute("draggable","false");
        zonePlayerTwo.style.background = "none";
        zonePlayerTwo.style.animation = "none";
      }
    }
    else{
      for (let i=0; i < 5; i++){
        image[i].setAttribute("draggable","false");
        zonePlayerOne.style.background = "none";
        zonePlayerOne.style.animation = "none";
      }
      for (let i=5; i < 10; i++){
        image[i].setAttribute("draggable","true");
        zonePlayerTwo.style.background = "url('assets/img/palet2.png') no-repeat right top";
        zonePlayerTwo.style.animation = "palet2 1.5s forwards";
      }
    }
    if (playedCard == 9){
      for (let i=0; i < 10; i++){
        image[i].setAttribute("draggable","false");
        zonePlayerOne.style.background = "none";
        zonePlayerTwo.style.background = "none";
      }
    }
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).removeAttribute("draggable");
    let cardPower = ev.toElement.querySelectorAll("p"); // puissance de la carte (haut gauche droite bas)
    let idCard = ev.target.querySelectorAll("div"); // ID de la carte jouée
    cardDrop = ev.target.id; //ID zone drop de la carte
    for (let i = 0; i < cardPower.length; i++){
      tableCard[(ev.target.id.substr(2, 1))-1][i]=cardPower[i].innerHTML;
    }
    if (idCard[0].id.substr(4, 2) < 6){
      ev.target.style.background = "#008";
      playing++;
    }
    else{
      ev.target.style.background = "#800";
      playing--;
    }
    switch(ev.target.id.substr(2, 1)){
      case "1": 
              if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[1][1])&&(tableCard[1][1]>-1)){
                if(idCard[0].id.substr(4,2) < 6){
                  dropZone[1].style.background = "#008";
                }
                else{
                  dropZone[1].style.background = "#800";
                }
              }
              if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[3][0])&&(tableCard[3][0]>-1)){
                if(idCard[0].id.substr(4,2) < 6){
                  dropZone[3].style.background = "#008";
                }
                else{
                  dropZone[3].style.background = "#800";
                }
              }
              break;
      case "2":
              if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[0][2])&&(tableCard[0][2]>-1)){
                if(idCard[0].id.substr(4,2) < 6){
                  dropZone[0].style.background = "#008";
                }
                else{
                  dropZone[0].style.background = "#800";
                }
              }
              if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[2][1])&&(tableCard[2][1]>-1)){
                if(idCard[0].id.substr(4,2) < 6){
                  dropZone[2].style.background = "#008";
                }
                else{
                  dropZone[2].style.background = "#800";
                }
              }
              if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[4][0])&&(tableCard[4][0]>-1)){
                if(idCard[0].id.substr(4,2) < 6){
                  dropZone[4].style.background = "#008";
                }
                else{
                  dropZone[4].style.background = "#800";
                }
              }
              break;
      case "3":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[1][2])&&(tableCard[1][2]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[1].style.background = "#008";
              }
              else{
                dropZone[1].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[5][0])&&(tableCard[5][0]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[5].style.background = "#008";
              }
              else{
                dropZone[5].style.background = "#800";
              }
            }
            break;
      case "4":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[0][3])&&(tableCard[0][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[0].style.background = "#008";
              }
              else{
                dropZone[0].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[4][1])&&(tableCard[4][1]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[4].style.background = "#008";
              }
              else{
                dropZone[4].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[6][0])&&(tableCard[6][0]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[6].style.background = "#008";
              }
              else{
                dropZone[6].style.background = "#800";
              }
            }
            break;
      case "5": 
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[1][3])&&(tableCard[1][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[1].style.background = "#008";
              }
              else{
                dropZone[1].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[3][2])&&(tableCard[3][2]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[3].style.background = "#008";
              }
              else{
                dropZone[3].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[5][1])&&(tableCard[5][1]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[5].style.background = "#008";
              }
              else{
                dropZone[5].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[7][0])&&(tableCard[7][0]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[7].style.background = "#008";
              }
              else{
                dropZone[7].style.background = "#800";
              }
            }
            break;
      case "6":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[2][3])&&(tableCard[2][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[2].style.background = "#008";
              }
              else{
                dropZone[2].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[4][2])&&(tableCard[4][2]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[4].style.background = "#008";
              }
              else{
                dropZone[4].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][3]) > tableCard[8][0])&&(tableCard[8][0]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[8].style.background = "#008";
              }
              else{
                dropZone[8].style.background = "#800";
              }
            }  
            break;
      case "7":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[3][3])&&(tableCard[3][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[3].style.background = "#008";
              }
              else{
                dropZone[3].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[7][1])&&(tableCard[7][1]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[7].style.background = "#008";
              }
              else{
                dropZone[7].style.background = "#800";
              }
            }
            break;
      case "8":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[4][3])&&(tableCard[4][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[4].style.background = "#008";
              }
              else{
                dropZone[4].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[6][2])&&(tableCard[6][2]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[6].style.background = "#008";
              }
              else{
                dropZone[6].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][2]) > tableCard[8][1])&&(tableCard[8][1]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[8].style.background = "#008";
              }
              else{
                dropZone[8].style.background = "#800";
              }
            }
            break;
      case "9":
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][0]) > tableCard[5][3])&&(tableCard[5][3]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[5].style.background = "#008";
              }
              else{
                dropZone[5].style.background = "#800";
              }
            }
            if ((parseInt(tableCard[(ev.target.id.substr(2, 1))-1][1]) > tableCard[7][2])&&(tableCard[7][2]>-1)){
              if(idCard[0].id.substr(4,2) < 6){
                dropZone[7].style.background = "#008";
              }
              else{
                dropZone[7].style.background = "#800";
              }
            }
            break;
    }
    playedCard++;
    redScore=0; blueScore=0;
    for (let i = 0; i < dropZone.length; i++){
      if (dropZone[i].style.background === "rgb(136, 0, 0)"){
        redScore++;
      }
      if (dropZone[i].style.background === "rgb(0, 0, 136)"){
        blueScore++;
      }
    }
    setDraggable();
    if ((playedCard == 9)){
      if (redScore >= 5){
        win = "Joueur 2 gagne !";
      }
      if (blueScore >= 5){
        win = "Joueur 1 gagne !";
      }
      scoreTab.style.display = "block";
      banner.style.display = "block";
      scoreTab.innerHTML = "<p>"+win+"</p><p><a href='index.php'>Retour</a></p>";
    }
  }

  let dropZone=document.querySelectorAll('.zoneCarte');
  for (let i=0; i<dropZone.length;i++){
    dropZone[i].addEventListener('dragover', function(event){allowDrop(event)});
    dropZone[i].addEventListener('drop', function(event){drop(event)});
  }

  let cartes=document.querySelectorAll('.img-container');
  for (let i=0; i<cartes.length;i++){
      cartes[i].addEventListener('dragstart', function(event){drag(event)});
  }

  for (let i=0; i<cartes.length;i++){
      cartes[i].addEventListener('drop', function(e) {
          e.stopPropagation();
      });
  }
}