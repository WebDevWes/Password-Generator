//CharSet- http://net-comber.com/charset.html

// Random Lower Case Letters
function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random()*26)+97));
}

// Random Upper Case Letters
function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random()*26)+65));
}

//Random Numbers
function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random()*10)+48));
}

//Random Symbols
function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.\|+_-=`~';
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
}

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

var password = document.getElementById('password'); //Input Box
var sliderVal = document.getElementById('sliderVal'); //Value from Slider
var upper = document.getElementById('upper'); //Uppercase Letter Checkbox
var lower = document.getElementById('lower'); //Lowercase Letter Checkbox
var number = document.getElementById('number'); //Number Checkbox
var symbol = document.getElementById('symbol'); //Symbol Checkbox
var generate = document.getElementById('generate'); //Generate Button
var clipboard = document.getElementById('clipboard'); //Copy to Clipboard Button

//On Click
generate.addEventListener('click', () => {
    var length = +sliderVal.Value;
    var truUpper = upper.checked;
    var truLower = lower.checked;
    var truNumber = number.checked;
    var truSymbol = symbol.checked;

    password.innerText= generatePassword(
        truUpper, 
        truLower,
        truNumber,
        truSymbol, 
        length
    );
});

//Password Generator Script
function generatePassword(truUpper,truLower,truNumber,truSymbol,length) {
    var generatedPassword = '';
    var typesCount = truUpper+truLower+truNumber+truSymbol;

    console.log('typesCount: ', typesCount);

    var Array = [{truUpper},{truLower},{truNumber},{truSymbol}].filter
    (
        item => Object.values(item)[0]
    );
    
    console.log('Array: ', Array);

    if(typesCount === 0){
        return 'Please select password specifications';
    }

    for(i=0; i<length; i+= typesCount){
        Array.forEach(type => {
            var funcName = Object.keys(type)[0];
            console.log('funcName: ', funcName);
           
            generatedPassword += randomFunc[funcName]();
        });
    }

    console.log(generatedPassword);


};