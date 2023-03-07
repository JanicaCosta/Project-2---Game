/**Startin script project */

const cells = document.querySelectorAll(".cell")

let checkTurn = true ;

/** defining two players */

let playerX = "X";
let playerO = "O";

/**defining event when clicking in the space for the board to show the players */

document.addEventListener("click", myfunction);

function myfunction(event) {
    if(event.target.matches(".cell")){
        startGame(event.target.id)
    }
};

/** functions to creat for the game */

    /**function to start the game, and to switch each turn */

function startGame(id) {
    let cell = document.getElementById(id);
    turn = checkTurn ? playerX : playerO;
    cell.textContent = turn;
    checkTurn = !checkTurn;
};

function checkWinner() {

};

function checkDraw() {

}

function gameCompleted() {

}

function computerPlays(){

}



