var gameBoardContainer = document.querySelector('.game-board-container')

for(let i=0;i<9;i++){
    let gameTile = document.createElement('div')
    gameTile.setAttribute('id', `tile${i}`)
    gameTile.classList.add('game-tile')
    gameBoardContainer.append(gameTile)
}


console.log(gameBoardContainer)


const gameBoard = (() => {
    var gameTileValues = []

    const updateTileValue = (gameTile, newValue) => {

        if(gameTileValues[gameTile.id])
        return

        gameTile.innerText = newValue
        gameTileValues[gameTile.id] = newValue
        showCurrentValues()
    }

    const showCurrentValues = () => console.log(gameTileValues)

    return {updateTileValue, showCurrentValues}
})()

console.log(gameBoard)

const gameTiles = document.querySelectorAll('.game-tile')
console.log(gameTiles)
gameTiles.forEach(gameTile => gameTile.addEventListener('click', () => gameBoard.updateTileValue(gameTile, 'X')))
