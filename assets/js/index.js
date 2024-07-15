document.addEventListener('DOMContentLoaded', function() {
    var timelineCards = document.querySelectorAll('.timeline__card');
  
    // Agregamos la clase 'animation' a cada elemento de la línea de tiempo
    timelineCards.forEach(function(card, index) {
      setTimeout(function() {
        card.classList.add('animation');
      }, index * 300); // Ajusta el retraso (300ms en este caso) para lograr el efecto deseado
    });
  });
;