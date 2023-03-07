/**Startin script project */

const cells = document.querySelectorAll(".cell")

/** defining two players */

let playerX = "X";
let playerO = "O";

/**defining event when clicking in the space for the board to show the players */

document.addEventListener("click", myfunction);

function myfunction(event) {
    if(event.target.matches(".cell")){
        console.log(event.target.id)
    }
};