var gameBoardContainer = document.querySelector('.game-board-container')

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

    const updateTileValue = (gameTile) => {

        if(gameTileValues[gameTile.id])
        return

        gameTile.innerText = currentChance
        gameTileValues[gameTile.id] = currentChance
        currentChance = currentChance==='X' ? 'O' : 'X'
        showCurrentValues()
        checkForWinner()
    }

    const checkForWinner = () => {
        if(gameTileValues[0] === gameTileValues[1] && gameTileValues[1] === gameTileValues[2])
        alert("1Winner")

        else if(gameTileValues[3] === gameTileValues[4] && gameTileValues[4] === gameTileValues[5])
        alert("2Winner")

        else if(gameTileValues[6] === gameTileValues[7] && gameTileValues[7] === gameTileValues[8])
        alert("3Winner")

        else if(gameTileValues[0] === gameTileValues[3] && gameTileValues[3] === gameTileValues[6])
        alert("4Winner")

        else if(gameTileValues[1] === gameTileValues[4] && gameTileValues[4] === gameTileValues[7])
        alert("5Winner")

        else if(gameTileValues[2] === gameTileValues[5] && gameTileValues[5] === gameTileValues[8])
        alert("6Winner")

        else if(gameTileValues[0] === gameTileValues[4] && gameTileValues[4] === gameTileValues[8])
        alert("7Winner")

        else if(gameTileValues[2] === gameTileValues[4] && gameTileValues[4] === gameTileValues[6])
        alert("8Winner")
    }

    const showCurrentValues = () => console.log(gameTileValues)

    return {updateTileValue, showCurrentValues}
})()

console.log(gameBoard)

const gameTiles = document.querySelectorAll('.game-tile')
console.log(gameTiles)
gameTiles.forEach(gameTile => gameTile.addEventListener('click', () => gameBoard.updateTileValue(gameTile)))
