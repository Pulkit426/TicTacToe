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
    var gameTileValues = new Array(9).fill(null)
    var currentChance = 'X'

    const resetGame = () => {
        gameTiles.forEach( gameTile => {
            gameTile.innerText = ''
        })
        
        gameTileValues.forEach( (tileValue,index) => {
            gameTileValues[index]=null
        })

        currentChance = 'X'
        updateGamestatus()
    }

    const updateGamestatus = () => {

        let gameStatus = document.querySelector('.game-status')
        gameStatus.innerText = `Player ${currentChance} Turn`
    }

    const updateTileValue = (gameTile) => {

        if(gameTileValues[gameTile.id])
        return

        gameTile.innerText = currentChance
        gameTileValues[gameTile.id] = currentChance
        currentChance = currentChance==='X' ? 'O' : 'X'
        showCurrentValues()
        checkForWinner()
        updateGamestatus()
    }

    const checkForWinner = () => {
        if(gameTileValues[0] === gameTileValues[1] && gameTileValues[1] === gameTileValues[2]==='X')
        alert("1Winner")

        else if(gameTileValues[3] === gameTileValues[4] && gameTileValues[4] === gameTileValues[5]==='X')
        alert("2Winner")

        else if(gameTileValues[6] === gameTileValues[7] && gameTileValues[7] === gameTileValues[8]==='X')
        alert("3Winner")

        else if(gameTileValues[0] === gameTileValues[3] && gameTileValues[3] === gameTileValues[6]==='X')
        alert("4Winner")

        else if(gameTileValues[1] === gameTileValues[4] && gameTileValues[4] === gameTileValues[7]==='X')
        alert("5Winner")

        else if(gameTileValues[2] === gameTileValues[5] && gameTileValues[5] === gameTileValues[8]==='X')
        alert("6Winner")

        else if(gameTileValues[0] === gameTileValues[4] && gameTileValues[4] === gameTileValues[8]==='X')
        alert("7Winner")

        else if(gameTileValues[2] === gameTileValues[4] && gameTileValues[4] === gameTileValues[6]==='X')
        alert("8Winner")
    }

    const showCurrentValues = () => console.log(gameTileValues)

    updateGamestatus()
    return {resetGame, updateTileValue, showCurrentValues}
})()

console.log(gameBoard)

const gameTiles = document.querySelectorAll('.game-tile')
console.log(gameTiles)
gameTiles.forEach(gameTile => gameTile.addEventListener('click', () => gameBoard.updateTileValue(gameTile)))

restartButton.addEventListener('click', () => {
    gameBoard.resetGame()
})