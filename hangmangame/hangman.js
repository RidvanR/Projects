var words = [
    "computer",
    "javascript",
    "maus",
    "tastatur",
    "tisch",
    "spielfigur",
    "grafikkarte",
    "spielfiguren",
    "galgenmaennchen",
    "rueckstoß",
    "fußball",
    "wasser",
    "doener",
    "gefrierbrand",
    "intel",
    "heidelbeer",
    "hagebuttel",
    "individuum",
    "fisch",
    "donaudampfsegelschiff",
    "aequivalent",
    "satz des pythagoras",
    "linearefunktionen",
    "ryzen",
    "tischtennis", 
    "headsethalterung",
]

let answer = ''; 
let maxWrong = 6; 
let mistakes = 0; 
let guessed = []; 
let wordStatus = null; 

// Nimmt ein beliebiges Wort von meiner Variabel words
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    

}

// Wie schon der Name der Funktion sagt generieren wir hier die einzelnen Buttons, mit den .split splitten wir den 
//String (Alphabet) in einzelne Werte die dann in einzelen Buttons eingetragen werden das .join enfernt die Kommas. 
// Das Map benutzt die Werte von split und überschreibt diese schließlich in einem neuen Array, hier in den einzelnen Buttons. 
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id= '` + letter + `'
        onClick="handleGuess('` + letter + `')"
        >
       ` + letter + `

        </button>
        
        `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML; 
}

// Hier werden die einzelnen Wörter nach dem Drücken eines Buchstabends enthüllt. Nachdem man ein Buchstaben drückt, wird dieser disabled. 
// Das .setAttribut fügt dem Element ändert den Wert vom dem vorhandenen Wert hier auf true damit dann der Button disabled wird. 
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 && guessed.push(chosenLetter); 
    document.getElementById(chosenLetter).setAttribute('disabled', true); 
    if (answer.indexOf(chosenLetter) >= 0 ) {
        guessedWord(); 
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1 ) {
        mistakes++; 
        updateMistakes(); 
        checkIfGameLost(); 
        updateHangmanPicture(); 
    }

}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'Du hast das Wort richtig erraten, du hast ' + mistakes + ' mal falsch geraten'
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('keyboard').innerHTML = 'Du hast verloren!' 
        document.getElementById('wordSpotlight').innerHTML = 'Die Antwort war ' + answer; 
    }
}

function updateHangmanPicture() {
    document.getElementById('hangManPic').src = '../bilder/' + mistakes + '.png'; 
}

// Hier hole ich die Wörter, die normalerweise angezeigt werden und wandle die in ----
// der index.of benutze ich um mein Wert im Array zu finden und dann stelle ich mein Abfrage wenn mein Wert großer als 0 ist,
// soll es dann wie oben beschrieben so angezeigt werden. 
function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes; 
}

function reset() {
    mistakes = 0; 
    guessed= []; 
    document.getElementById('hangManPic').src = '../bilder/0.png';

    randomWord();
    guessedWord(); 
    updateMistakes(); 
    generateButtons(); 
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord(); 
handleGuess(); 