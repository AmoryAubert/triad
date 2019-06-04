let cardDrop;
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
    // console.log(cardPower[i].innerHTML);
    tableCard[(ev.target.id.substr(2, 1))-1][i]=cardPower[i].innerHTML;
  }
  // console.log(idCard[0].id);
  // console.log(cardDrop);
  if (idCard[0].id.substr(4, 2) < 6){
    ev.target.style.background = "#008";
  }
  else{
    ev.target.style.background = "#800";
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
    case "7": console.log("pute 7"); break;
    case "8": console.log("pute 8"); break;
    case "9": console.log("pute 9"); break;
  }
  // console.log(tableCard);
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
