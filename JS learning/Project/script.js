let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore++
    } else if (winner == 'computer') {
        computerScore++
    }
}

function compareGuesses(human, computer, target) {
    const hm = Math.abs(human - target)
    const cm = Math.abs(computer - target)
    let obj = [
        {
            id: 'hm',
            value: hm
        },
        {
            id: 'cm',
            value: cm
        }
    ]
    obj.sort(function(a, b) {
        let dateA = a.value;
        let dateB = b.value;
        if (dateA < dateB) 
        {
            return -1;
        }    
        else if (dateA > dateB)
        {
            return 1;
        }   
        return 0;
    })
    if (obj[0].id == 'hm') {
        return true
    } else if (obj[0].id == 'cm') {
        return false
    }
}

function advanceRound() {
    currentRoundNumber++
}