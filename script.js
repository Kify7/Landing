
(function() {
  // obtenemos todos los botones dentro de info
  var buttons = document.querySelectorAll(".info > .button");
  // obtenemos todos los articles dentro de info
  var articles = document.querySelectorAll(".info > article");

  console.log(buttons);
  // iteramos todos los botones
  for (var i = 0; i < buttons.length; i++) {
    // agregamos el atributo index a todos los botones
    buttons[i].index = i;
    // agregamos un evento que escuche cuando el usuario hace un click
    buttons[i].addEventListener('click', function() {
      console.log(this.index);
      mostrarArticle(this.index);
      ocultarColorBoton(this.index);
    });
  }

  function mostrarArticle(index) {
    for (var j = 0; j < articles.length; j++) {
      articles[j].style.display = "none";
    }
    articles[index].style.display = "block";
  }

  function ocultarColorBoton(index) {
    for (var l = 0; l < buttons.length; l++) {
      buttons[l].style.backgroundColor = "rgb(171, 133, 184)";
    }
    buttons[index].style.backgroundColor = "rgb(184, 15, 148)";
  }



})();
