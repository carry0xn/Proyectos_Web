//seleccionamos el div desplegable
const DESPLEGABLE = document.getElementById("desplegable");
//creamos una función que muestre o esconda el desplegable
function mostrarNavMobile(){
    DESPLEGABLE.classList.toggle("mostrar_desplegable");
}

document.addEventListener('DOMContentLoaded', function() {
    var timelineCards = document.querySelectorAll('.timeline__card');
  
    // Agregamos la clase 'animation' a cada elemento de la línea de tiempo
    timelineCards.forEach(function(card, index) {
      setTimeout(function() {
        card.classList.add('animation');
      }, index * 300); // Ajusta el retraso (300ms en este caso) para lograr el efecto deseado
    });
  });
  