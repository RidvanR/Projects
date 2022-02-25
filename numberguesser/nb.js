let btn = document.getElementById('btn')
let output = document.getElementById('output-text')
let wrongGuesses = document.getElementById('wrongGuesses')
let countWrongGuesses = 0
let refreshbtn = document.getElementById('new')

let number = Math.floor(Math.random() * 100)

btn.addEventListener('click', function () {
    let input = document.getElementById('userInput').value
    if (input == number) {
        output.innerHTML = `Du hast richtig geraten die gesuchte Nummer lautet ${number}`
        wrongGuesses.innerHTML = `Du hast insgesamt ${countWrongGuesses}mal falsch geraten`
    } else if (input < number) {
        output.innerHTML = `Deine Nummer ist zu niedrig`
        wrongGuesses.innerHTML = `Du hast ${countWrongGuesses++} falsch geraten`
    } else {
        output.innerHTML = `Deine Nummer ist zu hoch`
        wrongGuesses.innerHTML = `Du hast ${countWrongGuesses++} falsch geraten`
    }

    if (countWrongGuesses === 10) {
        btn.disabled = true
        output.innerHTML = 'Du hast zu oft falsch geraten. Drück Reset um eine neue Runde zu starten'
    }

})

refreshbtn.addEventListener('click', function () {
    number = Math.floor(Math.random() * 99)
    output.innerHTML = `Gib hier eine Nummer ein`
    wrongGuesses.innerHTML = `Du hast 0 mal falsch geraten`
    countWrongGuesses = 0; 
    btn.disabled = false; 
})
