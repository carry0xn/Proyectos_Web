document.addEventListener('DOMContentLoaded', function() {
    var timelineCards = document.querySelectorAll('.timeline__card');
  
    // Agregamos la clase 'animation' a cada elemento de la línea de tiempo
    timelineCards.forEach(function(card, index) {
      setTimeout(function() {
        card.classList.add('animation');
      }, index * 300); // Ajusta el retraso (300ms en este caso) para lograr el efecto deseado
    });
  });

  Vue.component('porfolio-app', {
    template: `
        <div class="proyectos">
          <div class="box">
            <div class="imgBx">
              <img src="./assets/img/comments-python.jpg">
            </div>
            <div class="content">
                <div>
                    <h2>Proyectos Python</h2>
                    <a href="https://github.com/carry0xn/Python" target="_blank"><i class="fa fa-fw fa-github"></i> Repositorio Python </a>
                </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src="./assets/img/javascript-code.jpg">
            </div>
            <div class="content">
                <div>
                    <h2>Proyectos Web</h2>
                    <a href="https://github.com/carry0xn/web-development" target="_blank"><i class="fa fa-fw fa-github"></i> Repositorio Web </a>
                </div>
            </div>
          </div>

          <div class="box">
            <div class="imgBx">
                <img src="./assets/img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png" target="_blank">
            </div>
            <div class="content">
                <div>
                    <h2>Proyecto Web</h2>
                    <p>Fue realizado en grupo</p>
                    <a href="https://github.com/JaviMun/CodoaCodo" target="_blank"><i class="fa fa-fw fa-github"></i> Repositorio Web </a>
                </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
                <img src="./assets/img/para-que-sirve-lenguaje-sql.jpg">
            </div>
            <div class="content">
                <div>
                    <h2>Proyectos SQL</h2>
                    <a href="https://github.com/carry0xn/SQL" target="_blank"><i class="fa fa-fw fa-github"></i> Repositorio SQL </a>
                </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
                <img src="./assets/img/dataScience.png">
            </div>
            <div class="content">
                <div>
                    <h2>Proyectos de Data Science</h2>
                    <a href="https://github.com/carry0xn/DataScience" target="_blank"><i class="fa fa-fw fa-github"></i> Repositorio Data Science </a>
                </div>
            </div>
          </div>
        </div>
    `
});

Vue.component('porfolio-app-ingles', {
  template: `
      <div class="proyectos">
        <div class="box">
          <div class="imgBx">
            <img src="./assets/img/comments-python.jpg">
          </div>
          <div class="content">
              <div>
                  <h2>Python Proyects</h2>
                  <a href="https://github.com/carry0xn/Python" target="_blank"><i class="fa fa-fw fa-github"></i> Repository </a>
              </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src="./assets/img/javascript-code.jpg">
          </div>
          <div class="content">
              <div>
                  <h2>Web Proyects</h2>
                  <a href="https://github.com/carry0xn/web-development" target="_blank"><i class="fa fa-fw fa-github"></i> Repository </a>
              </div>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
              <img src="./assets/img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png" target="_blank">
          </div>
          <div class="content">
              <div>
                  <h2>Web Project</h2>
                  <p>Executed in collaboration with a team</p>
                  <a href="https://github.com/JaviMun/CodoaCodo" target="_blank"><i class="fa fa-fw fa-github"></i> Repository </a>
              </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
              <img src="./assets/img/para-que-sirve-lenguaje-sql.jpg">
          </div>
          <div class="content">
              <div>
                  <h2>SQL Proyects </h2>
                  <a href="https://github.com/carry0xn/SQL" target="_blank"><i class="fa fa-fw fa-github"></i> Repository </a>
              </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
              <img src="./assets/img/dataScience.png">
          </div>
          <div class="content">
              <div>
                  <h2>Data Science Proyects </h2>
                  <a href="https://github.com/carry0xn/DataScience" target="_blank"><i class="fa fa-fw fa-github"></i> Repository </a>
              </div>
          </div>
        </div>
      </div>
  `
});

new Vue({
    el: '#app',
});

