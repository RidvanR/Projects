const X_CLASS = 'x'
const CIRCLE_CLASS = "circle"
const WINNING_COMBINATIONS = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    // Vertikal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonale 
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winnig-message-text]')
let circleTurn 

startGame(); 

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false; 
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)

    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Unentschieden!"
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} hat Gewonnen!`
    }
    winningMessageElement.classList.add('show')
}

// Hier checke, wenn weder x noch o gewinnen ist es unentschieden
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

// Setzt das x oder o also added es. 
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

// Wechselt die Klassen nachdem einer was gesetzt hat
function swapTurns() {
    circleTurn = !circleTurn
}

// Bestimmt welche Klasse setzen darf 
    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (circleTurn) {
            board.classList.add(CIRCLE_CLASS)
        } else {
            board.classList.add(X_CLASS)
        }
}

// Hier checke ich ob derzeitige Klasse also x oder o in der oben gennaten Kombination steht
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}