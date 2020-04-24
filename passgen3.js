// declare varaibles from dom after load to make sure they are current 

const password = document.querySelector("password");
const randomNum =[48,57];
const upperCase = [65,90];
const lowerCase = [97,122];
const randomSymbol = [33,47];

function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
}


document.querySelector("#generate").addEventListener('click', ()=> {
  const length = document.querySelector("#sliderVal").value;
  const upper = document.querySelector("#upper").checked;
  const lower = document.querySelector("#lower").checked;
  const numbers = document.querySelector("#number").checked;
  const symbol = document.querySelector("#symbol").checked;
  
  const ranSelector = [];
  const ranPassword = [];
  //String.fromCharCode();
  if(upperCase===true){
    for(let i=upperCase[0]; i<=upperCase[1]; i++){
      ranSelector.push(i);
    }
  }
  if(randomNum===true){
    for(let i=randomNum[0]; i<= randomNum[1]; i++){
      ranSelector.push(i);
    }
  }
  if(randomSymbol===true){
    for(let i=randomSymbol[0]; i<= randomSymbol[1]; i++){
      ranSelector.push(i);
    }
  }
  if(lowerCase===true){
    for(let i=lowerCase[0]; i<= lowerCase[1]; i++){
      ranSelector.push(i);
    }
  }
  
console.log(ranSelector)
})