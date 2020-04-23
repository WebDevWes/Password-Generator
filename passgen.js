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
    return symbols[0];
}


console.log(getRandomSymbol());