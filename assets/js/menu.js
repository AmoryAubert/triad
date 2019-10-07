let option1 = document.getElementById("opt1").addEventListener("click", menu1);
let option3 = document.getElementById("opt3").addEventListener("click", menu3);
let menu = document.getElementById("menu");

function menu1(){
    menu.innerHTML = `<ul>
                        <li><a href="game.php?opt=1">Jouer avec les decks</a></li>
                        <li><a href="game.php?opt=2">Jouer avec decks aléatoires</a></li>
                    </ul>`;
}
function menu3(){
    menu.innerHTML = `<ul>
                        <li><a href="game.php?opt=5">Jouer avec le deck</a></li>
                        <li><a href="game.php?opt=6">Jouer avec deck aléatoire</a></li>
                    </ul>`;
}