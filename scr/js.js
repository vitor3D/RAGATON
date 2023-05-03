window.onload = function() {
    // selecionar o botão do menu
    var menuButton = document.querySelector('.menu-icon');

    // adicionar um evento de clique ao botão do menu
    menuButton.addEventListener('click', function() {
      // selecionar o dropdown
      var dropdown = document.querySelector('.dropdown');

      // se o dropdown está visível, ocultá-lo
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
      // caso contrário, mostrá-lo
      else {
        dropdown.classList.add('show');
      }
    });
  };