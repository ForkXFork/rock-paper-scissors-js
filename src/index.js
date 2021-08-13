function playRound(playerPick, computerPick){
    if (computerPick == 'Rock' && playerPick == 'Scissors'){
        return 'Rock beats Scissors! Computer Wins!'
    } else if (computerPick == 'Paper' && playerPick == 'Rock'){
        return 'Paper beats Rock! Computer Wins!'
    } else if (computerPick == 'Scissors' && playerPick == 'Paper'){
        return 'Scissors beats Paper! Computer Wins!'
    } else if (computerPick == 'Scissors' && playerPick == 'Rock'){
        return 'Rock beats Scissors! Player Wins!'
    } else if (computerPick == 'Rock' && playerPick == 'Paper'){
        return 'Paper beats Rock! Player Wins!'
    } else if (computerPick == 'Paper' && playerPick == 'Scissors'){
        return 'Scissors beats Paper! Player Wins!'
    } else {
        return `${playerPick} and ${computerPick}!!! It's a tie!`
    }
}

function computerPick(){
    const rnum = Math.floor(Math.random() * 3)
    if (rnum == 0){
        return 'Scissors';
    } else if (rnum == 1) {
        return 'Paper';
    } else if (rnum ==2) {
        return 'Rock';
    } else {
        console.log(`Error: ${rnum}`)
    }
}

const playerPick = 'Rock'

var computerWins = 0
var playerWins = 0
for( let i = 0; i < 6; i++){

    const winner = playRound(playerPick, computerPick())
    console.log(winner)
    const winnerCounter = (winnerVar) => {
        if (winnerVar.includes('Player')){
            return 'Player'
        } else if (winnerVar.includes('Computer')) {
            return 'Computer'
        } else {
            return 'Both'
        }
    }

    if (winnerCounter(winner) == 'Player'){
        playerWins++
    } else if (winnerCounter(winner) == 'Computer'){
        computerWins++
    } else {
        playerWins++
        computerWins++
    }
}

if (playerWins > computerWins){
    console.log('>>> Player Wins! <<<')
} else if (computerWins > playerWins){
    console.log('>>> Computer Wins! <<<')
} else {
    console.log('>>> It\'s a tie! <<<')
}
