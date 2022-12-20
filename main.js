var gameBoardContainer = document.querySelector('.game-board-container')
let restartButton  = document.querySelector('.restart')


for(let i=0;i<9;i++){
    let gameTile = document.createElement('div')
    gameTile.setAttribute('id', `${i}`)
    gameTile.classList.add('game-tile')
    gameBoardContainer.append(gameTile)
}


console.log(gameBoardContainer)


const gameBoard = (() => {
    var gameTileValues = new Array(9).fill('')
    var currentChance = 'X'
    var winStatus = false

    const resetGame = () => {
        gameTiles.forEach( gameTile => {
            gameTile.innerText = ''
        })
        
        gameTileValues.forEach( (tileValue,index) => {
            gameTileValues[index]=''
        })

        currentChance = 'X'
        winStatus = false
        updateGamestatus()
    }

    const updateGamestatus = (status) => {

        status = status || "Player X's turn"

        let gameStatus = document.querySelector('.game-status')
        gameStatus.innerText = status
    }

    const updateTileValue = (gameTile) => {

        if(winStatus || gameTileValues[gameTile.id])
        return

        gameTile.innerText = currentChance
        gameTileValues[gameTile.id] = currentChance

       if(checkForWinner(gameTile.id, currentChance )){
        updateGamestatus(`Player ${currentChance} Won`)
        winStatus = true
       }

       else if(checkForDraw()){
        updateGamestatus('Match Drawn')
       }

       else{
        currentChance = currentChance==='X' ? 'O' : 'X'
        updateGamestatus(`Player ${currentChance}'s Turn`)
       }
    }

    const checkForWinner = (tileId, currentPlayer) => {
        const winningCombination = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        return winningCombination.filter(combination => combination.includes(Number(tileId)) )
                                  .some(combination => 
                                    combination.every(id => gameTileValues[id]===currentPlayer))
    }


    const checkForDraw = () => {
        if(gameTileValues.every( item => item==='X' || item==='O'))
        return true
    }

    updateGamestatus()
    return {resetGame, updateTileValue}
})()


const gameTiles = document.querySelectorAll('.game-tile')
console.log(gameTiles)
gameTiles.forEach(gameTile => gameTile.addEventListener('click', () => gameBoard.updateTileValue(gameTile)))

restartButton.addEventListener('click', () => {
    gameBoard.resetGame()
})