// Variables

const passwordBox = document.querySelector("#password");
const randomSymbol = [33,47];
const randomNum =[48,57];
const upperCase = [65,90];
const lowerCase = [97,122];
let empty = "Please select at least one type of characters!"

// Slider
function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
}

// Clipboard
clipboard.onclick = function () {
    passwordBox.select();
    document.execCommand('Copy')
}

// Event listener for the generate button
document.querySelector("#generate").addEventListener('click', generatePass)

function generatePass() {
  const passLength = document.querySelector("#sliderVal").value;
  const upper = document.querySelector("#upper").checked;
  const lower = document.querySelector("#lower").checked;
  const numbers = document.querySelector("#number").checked;
  const symbols = document.querySelector("#symbol").checked;
  
  const ranSelector = [];
  const password = [];

  if(upper==false && lower==false && numbers==false && symbols==false){
    console.log(empty)
    alert(empty)
  }

  if(symbols===true){
    for(let i=randomSymbol[0]; i<= randomSymbol[1]; i++){
      ranSelector.push(i);
    }
  }
  if(numbers===true){
    for(let i=randomNum[0]; i<= randomNum[1]; i++){
      ranSelector.push(i);
    }
  }
  if(upper===true){
    for(let i=upperCase[0]; i<= upperCase[1]; i++){
      ranSelector.push(i);
    }
  }
  if(lower===true){
    for(let i=lowerCase[0]; i<= lowerCase[1]; i++){
      ranSelector.push(i);
    }
  }
  //console.log(ranSelector)
  // Generate and push password to input box
  for(let i = 0; i< passLength; i++){
    password.push(String.fromCharCode(ranSelector[Math.floor(Math.random()*ranSelector.length)]))
  }
  let generated = password.textContent = password.join("");
  
  // Utilizing .match to ensure password contains the characters selected
  if(symbols===true){
    let regex = /[^\w\s]/g;
    let found = generated.match(regex);
      if(found === null){
        console.log("no symbols");
        generatePass();
      } 
  }
  if(numbers===true){
    let regex = /[0-9]/g;
    let found = generated.match(regex);
      if(found === null){
        console.log("no numbers");
        generatePass();
      }
  }

  //console.log(generated)
  passwordBox.value = generated;
}