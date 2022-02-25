// Deklaration und Initialisierung der Variabeln.
let calculate = document.getElementById('display')
let result = document.getElementById('display1')
let buttons = Array.from(document.getElementsByClassName('button'))

// Funktion, in der initialisert wird, was der Browser tun soll
buttons.map( button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText) {
            case 'C':
                calculate.innerText = '';
                result.innerText = '';
                break;
                case 'DEL':
                    calculate.innerText = calculate.innerText.slice(0, -1);
                    break; 
                case '=':
                    result.innerText = eval(calculate.innerText);
                    break; 
                default:
                    calculate.innerText += e.target.innerText
        }
    })
})