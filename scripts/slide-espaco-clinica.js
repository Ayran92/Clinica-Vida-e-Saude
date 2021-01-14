//Script para o funcionamento do slie que mostra os espaços da Clinica.
//PS: Lembrar de adicionar a descrição das imagens para acessibilidade.
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6000); // Change image every 2 seconds
}