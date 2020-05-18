// Variables

const passwordBox = document.querySelector("#password");
const randomNum =[48,57];
const upperCase = [65,90];
const lowerCase = [97,122];
const randomSymbol = [33,47];
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
document.querySelector("#generate").addEventListener('click', function generatePass() {
  const length = document.querySelector("#sliderVal").value;
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

  if(upper===true){
    for(let i=upperCase[0]; i<= upperCase[1]; i++){
      ranSelector.push(i);
    }
  }
  if(numbers===true){
    for(let i=randomNum[0]; i<= randomNum[1]; i++){
      ranSelector.push(i);
    }
  }
  if(symbols===true){
    for(let i=randomSymbol[0]; i<= randomSymbol[1]; i++){
      ranSelector.push(i);
    }
  }
  if(lower===true){
    for(let i=lowerCase[0]; i<= lowerCase[1]; i++){
      ranSelector.push(i);
    }
  }
  
  // Generate and push password to input box
  for(let i = 0; i< length; i++){
    password.push(String.fromCharCode(ranSelector[Math.floor(Math.random()*ranSelector.length)]))
  }
  let generated = password.textContent = password.join("");
  if(symbols===true){
    let regex = /[^\w\s]/g;
    let found = generated.match(regex);
      if(found===null || 0){
        console.log("No Symbols Found");
        generatePass();
      } else {
        passwordBox.value = generated;
      }
  }
  //console.log(generated)
  //passwordBox.value = generated;
})