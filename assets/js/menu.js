let option1 = document.getElementById("opt1").addEventListener("click", menu1);
let menu = document.getElementById("menu");

function menu1(){
    menu.innerHTML = `<ul>
                        <li><a href="game.php?opt=1">Jouer avec les decks</a></li>
                        <li><a href="game.php?opt=2">Jouer en mode random</a></li>
                    </ul>`;
}