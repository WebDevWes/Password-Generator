// Variables

const results = document.getElementById('password');
const UNInum =[48,57];
const UNIupper = [65,90];
const UNIlower = [97,122];
const UNIsym = [33,47];

// Slider
function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
}

// Event listener for the generate button
document.querySelector("#generate").addEventListener('click', ()=> {
  const length = document.querySelector("#sliderVal").value;
  const upper = document.querySelector("#upper").checked;
  const lower = document.querySelector("#lower").checked;
  const numbers = document.querySelector("#number").checked;
  const symbols = document.querySelector("#symbol").checked;
  
  const randSelector = [];
  const password = [];

  if(upper===true){
    for(let i=UNIupper[0]; i<= UNIupper[1]; i++){
      randSelector.push(i);
    }
  }
  if(numbers===true){
    for(let i=UNInum[0]; i<= UNInum[1]; i++){
      randSelector.push(i);
    }
  }
  if(symbols===true){
    for(let i=UNIsym[0]; i<= UNIsym[1]; i++){
      randSelector.push(i);
    }
  }
  if(lower===true){
    for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
      randSelector.push(i);
    }
  }
  
  // Generate and push password to input box
  for(let i = 0; i< length; i++){
    password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
  }
  password.textContent = password.join('');
  console.log (password)

})
