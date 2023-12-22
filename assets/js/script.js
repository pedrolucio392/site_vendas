/* Iniciar o Carrossel */

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 3000, // Tempo em milissegundos entre as transições
      pause: false // Se o mouse estiver sobre o carrossel, a transição pausa
    });
  });