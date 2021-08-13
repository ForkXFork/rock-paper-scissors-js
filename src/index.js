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
    }
}

const playerPick = 'Rock'

for( let i = 0; i < 6; i++){
    console.log(playRound(playerPick, computerPick()))
}

