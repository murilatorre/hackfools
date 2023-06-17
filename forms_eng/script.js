const termos = document.querySelector("#check");


function muda() {
  let div = document.querySelector("#termos");
  let mais = document.querySelector("#btn")
  if(mais.innerText ==  '+'){
    mais.innerText = '-';
  } 
  else{
    mais.innerText = '+';
  }
  div.classList.toggle("desaparece");
}

function checa(){
  let button = document.querySelector("#finish")
  button.classList.toggle("desaparece");
}