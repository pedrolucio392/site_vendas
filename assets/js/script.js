/* Iniciar o Carrossel */

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 10000, 
      pause: false
    });
  });

/* Controlar setas carroseel */

var bannerCarousel = document.getElementById('carouselBanner');

    bannerCarousel.addEventListener('mouseenter', function () {
    bannerCarousel.classList.add('show-arrows');
});

    bannerCarousel.addEventListener('mouseleave', function () {
    bannerCarousel.classList.remove('show-arrows');
});

/* Pesquisa */

function handleSearchIconClick() {
    document.getElementById('searchInput').focus() // Foca no input ao clicar no ícone de lupa
}

function handleSearch() {
    var searchTerm = document.getElementById('searchInput').value;
    alert('Você pesquisou por: ' + searchTerm);
    return false;
}

