function change() {
        let i = Math.floor(Math.random()*500)+1;
        let j = Math.floor(Math.random()*500)+1;
        let b = document.querySelector("button");
        b.classList.toggle('posição')
        b.style.marginLeft = i+"px";
        b.style.marginTop = j+"px"
}
document.getElementById("meuBotao").addEventListener("click", function() {
  document.getElementById("meuPopup").style.display = "block";
});

document.querySelector(".fechar").addEventListener("click", function() {
  document.getElementById("meuPopup").style.display = "none";
});