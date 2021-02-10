const gameBoard = document.getElementById('gameBoard');
const startBtn = document.getElementById('startBtn');
const computerHandDiv = document.getElementById('computerHand');
const playerHandDiv = document.getElementById('playerHand');
const gameField = document.getElementById('gameField');

startBtn.addEventListener('click', startNewGame);

let scoreBoard = {
    player: 0,
    computer: 0
}

function startNewGame() {
    startBtn.classList.add('hide');
    renderGamePieces();



    //updateScoreBoard();
}



function renderGamePieces() {
    const gameBtns = `
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
    `;

    gameField.innerHTML = gameBtns;
    gameField.addEventListener('click', playRound)
}

function playRound(evt) {
    // Generate computers hand
    const computerHand = getComputerHand();

    // Find player hand by evt.target
    let playerHand = evt.target.innerText;
    playerHand = getPlayerHand(playerHand);

    // Compare computerhand with playerhand
    declareWinner(playerHand, computerHand);

    // Display round winner

    // Update score
}

function getComputerHand() {
    const computerHand = Math.floor(Math.random() * 3 + 1);
    const computerHandDiv = document.getElementById('computerHand');

    switch (computerHand) {
        case 1:
            computerHandDiv.innerText = 'Rock';
            break;

        case 2:
            computerHandDiv.innerText = 'Paper';
            break;

        case 3:
            computerHandDiv.innerText = 'Scissors';
            break;

        default:
            break;
    }
    return computerHand
}

function getPlayerHand(playerHand) {
    const playerHandDiv = document.getElementById('playerHand');

    switch (playerHand) {
        case 'Rock':
            playerHandDiv.innerText = 'Rock';
            return 1

        case 'Paper':
            playerHandDiv.innerText = 'Paper';
            return 2

        case 'Scissors':
            playerHandDiv.innerText = 'Scissors';
            return 3

        default:
            break;
    }
}

function declareWinner(player, computer) {
    
    // 1: Rock
    // 2: Paper
    // 3: Scissors
    switch (true) {
        case (player === computer):
            // It's a tie
            console.log("It's a tie");
            break;

        case (computer == 1 && player == 3 || computer == 2 && player == 1 || computer == 3 && player == 2):
            // Computer wins
            console.log("Computer wins");
            updateScore('computer');
            break;

        case (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2):
            // Player wins
            console.log("Player wins");
            updateScore('player');
            break;

        default:
            break;
    }
}

const scorePlayer = document.getElementById('scorePlayer');
const scoreComputer = document.getElementById('scoreComputer');

function updateScore(winner) {
    // Update global object
    scoreBoard[winner]++;

    // Update DOM with new scores
    scorePlayer.innerText = scoreBoard.player;
    scoreComputer.innerText = scoreBoard.computer;
}



// when player clicks on a gamepiece: rock paper or scissors
// Create random choice for the computer as well
// Then display both
// Then compare both and declade a winner





/*
function updateScoreBoard() {
    for (player of scoreBoard) {
        console.log(player.name);
        console.log(player.score);
        const currentScore = player.score;


    }
}
*/

