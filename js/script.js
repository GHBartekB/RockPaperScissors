const btn = document.querySelector('.start');
const images = document.querySelectorAll('img');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const numbers = document.querySelector('.numbers');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const draws = document.querySelector('.draws');
const whoWin = document.querySelector('.whoWin');

const players = {
    playerHand: null,
    computerHand: null,
}

const currentGameResults = {
    numbers: null,
    wins: null,
    losses: null,
    draws: null,
}

// Wybór ręki gracza 

function selectedHand() {

    images.forEach(img => {
        img.style.boxShadow = "";
    })

    this.style.boxShadow = "0 0 0 4px royalblue";
    players.playerHand = this.dataset.option;

}

// Wybór ręki komputera

function computerHand() {

    let i = Math.floor(Math.random() * images.length);
    const aiHand = images[i].dataset.option;
    return aiHand;


}

images.forEach(img => {

    img.addEventListener('click', selectedHand);
})

function checkResult(player, computer) {
    if (player === computer) {
        return 'draws'
    } else if (player === 'kamień' && computer === 'nożyczki' || player === 'nożyczki' && computer === 'papier' || player === 'papier' && computer === 'kamień') {
        return 'wins'
    } else {
        return 'losses'
    }

}


function startGame() {

    if (!players.playerHand) {
        alert("Musisz coś wybrać!")
        return;
    }

    players.computerHand = computerHand();
    const gameResult = checkResult(players.playerHand, players.computerHand);
    if (gameResult === 'draws') {
        draws.textContent = `${++currentGameResults.draws}`;
        whoWin.style.color = "orange";
        whoWin.textContent = "Remis";

    } else if (gameResult === 'wins') {
        wins.textContent = `${++currentGameResults.wins}`;
        whoWin.style.color = "green";
        whoWin.textContent = "Gracz";

    } else {
        losses.textContent = `${++currentGameResults.losses}`;
        whoWin.style.color = "red";
        whoWin.textContent = "Komputer ;(";
    }
    playerChoice.textContent = `${players.playerHand}`;
    numbers.textContent = `${++currentGameResults.numbers}`;
    computerChoice.textContent = `${players.computerHand}`;

}


btn.addEventListener('click', startGame);