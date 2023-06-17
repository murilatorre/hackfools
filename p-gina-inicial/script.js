let isEng = false;
const compra=document.querySelector('#compra');

function traduz_eng(){
  titulo=document.querySelector('#titulo');
  titulo.innerText='Get your ticket to the Tour that is the most expected of our Era!';
  cadastro=document.querySelector('h4');
  cadastro.innerHTML="Let's guarantee your ticket!";
  compra.innerHTML="BUY IT";
  isEng = true; 
}

function traduz_port(){
  titulo=document.querySelector('#titulo');
  titulo.innerText='Consiga agora o seu ingresso para a Tour mais esperada da Era!';
  cadastro=document.querySelector('h4');
  cadastro.innerHTML="Vamos garantir o seu ingresso!";
  compra.innerHTML="REALIZAR COMPRA";
  isEng = false;
}

function cadastroNotFun(){
  if (isEng == true){
    window.location.href = "../forms_eng/index.html";
  }
  else{
    window.location.href = "../forms/index.html";
  }
}
