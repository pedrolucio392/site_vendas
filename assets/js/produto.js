

$(document).ready(function() {
    // Manipula o clique nas miniaturas
    $('.thumbnail').click(function() {
      // Obtém o caminho da imagem da miniatura clicada
      var newImageSrc = $(this).attr('src');

      // Atualiza a imagem principal com o caminho da miniatura clicada
      $('.main-image').attr('src', newImageSrc);
    });
  });