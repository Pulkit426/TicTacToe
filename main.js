var gameBoardContainer = document.querySelector('.game-board-container')

for(let i=0;i<9;i++){
    let gameTile = document.createElement('div')
    gameTile.classList.add('game-tile')
    gameBoardContainer.append(gameTile)
}


console.log(gameBoardContainer)