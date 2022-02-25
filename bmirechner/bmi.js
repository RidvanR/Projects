let btn = document.getElementById('calcbutton')

btn.addEventListener('click', function() {
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value; 

    let result = (weight / ( height * height) * 10000)
    // document.getElementById('bmi-output').value =  Math.round(result);

    if (result > 26) {
        document.getElementById('bmi-output').value = Math.round(result) + ',' + ' Du bist Übergewichtig!'; 
    } else if (result < 18) {
        document.getElementById('bmi-output').value = Math.round(result) + ',' + ' Du bist Untergewichtig!';
    } else if (result > 30) {
        document.getElementById('bmi-output').value = Math.round(result) + ',' + ' Du hast Adipositas!'
    }
    else {
        document.getElementById('bmi-output').value = Math.round(result) + ',' + ' Du bist Normal';
    }

})