/**Startin script project */

const cells = document.querySelectorAll(".cell")

let checkTurn = true ;

/** defining two players */

let playerX = "X";
let playerO = "O";

/**winning combinations */

let winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

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
    cell.classList.add(turn);
    checkWinner(turn);
};

  /**function to check winner and draw */

function checkWinner() {
    const winner = winnerCombinations.some((comb) => {
        return comb.every((index) => {
          return cells[index].classList.contains(turn);
        });
      });

      if (winner) {
        gameCompleted(turn);
      } else if (checkDraw()) {
        gameCompleted();
      } else {
        checkTurn = !checkTurn;
      }
};

function checkDraw() {
    let x = 0;
    let o = 0;
    for (index in cells) {
      if (!isNaN(index)) {
        if (cells[index].classList.contains(playerX)) {
          x++;
        }

        if (cells[index].classList.contains(playerO)) {
          o++;
        }
      }
    }
    return x + o === 9 ? true : false;
}

function gameCompleted() {

}

function computerPlays(){

}



