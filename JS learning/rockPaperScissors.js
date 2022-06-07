var getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'pussy destroyer' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('You have not chose the correct symbol');
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else if (number === 2) {
        return 'scissors';
    };
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is tie'
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won'
        } else {
            return 'You won'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You won'
        } else {
            return 'The computer won'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You won'
        } else {
            return 'The computer won'
        }
    } else if (userChoice === 'pussy destroyer') {
        return 'You won mother fucker you fucking pussy licker!!!'
    } else if (userChoice === 'bomb') {
        return 'You used cheats mother fucker you won! SUCKER!'
    }
}

function playGame(userChoices) {
    let userChoice = getUserChoice(userChoices)
    let computerChoice = getComputerChoice()
    if (userChoice === 'bomb') {
        console.log('You successfully used cheats');
    } else if (userChoice === 'pussy destroyer') {
        console.log('Congratulations you won! I love to lick pussys');
    } else {
        console.log('You choice ' + userChoice);
        console.log('The computer choice ' + computerChoice);
    }
    console.log(determineWinner(userChoice, computerChoice));
}
playGame('paper')