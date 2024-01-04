
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
    document.getElementById('searchInput').focus()
}

function handleSearch() {
    var searchTerm = document.getElementById('searchInput').value;
    alert('Você pesquisou por: ' + searchTerm);
    return false;
}



/* Cards de Livros em oferta */



var livrosOfertas = [
    {
      title: "Combo Psicologia Tomista (8 livros)",
      coverImage: "assets/images/livro1.jpg",
      price: 460.98,
      buyLink: "../../carrinho.html" 
    },
    {
      title: "Catecismo de São Pio X (Ilustrado e Comentado)",
      coverImage: "assets/images/livro2.jpg",
      price: 34.99,
      buyLink: "../../carrinho.html"
    },
    {
        title: "Santo Tomás de Aquino - João Ameal (CAPA DURA)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/237907702/mockup-pbe8wtwdcf.png",
        price: 84.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Educação Sexual e Relações Humanas - Rudolf Allers (Capa Dura)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/245429878/frente-guy6xdc36y.jpg",
        price: 89.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "História de Portugal: Das Origens até 1940 - João Ameal (CAPA DURA)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/169051827/8164e56bf4.jpg",
        price: 112.00,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Imitação de Cristo - Tomás de Kempis (CAPA DURA)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/106653494/bd9233f774.jpg",
        price: 49.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Vida de São José de Cupertino (Frei Roberto Brunelli)",
        coverImage: "https://cdn.awsli.com.br/400x400/478/478284/produto/158934718/24-sa-o-jose--cupertino---mockup-cthzfsv3xd.png",
        price: 102.80,
        buyLink: "../../carrinho.html"
    },
    {
        title: "O Criador e a Criatura - as Maravilhas do Amor Divino (Pe. William Faber)",
        coverImage: "https://cdn.awsli.com.br/400x400/478/478284/produto/242091415/o-criador-e-a-criatura_capa-3d-para-loja-l4hk68e3nn.png",
        price: 124.60,
        buyLink: "../../carrinho.html"
    },
  ];

function createBookCarouselPromotion() {
    var bookContainer = document.getElementById("bookContainerPromotion");

    // Agrupa os livros em conjuntos de 5
    var groupedBooks = chunkArray(livrosOfertas, 4);

    groupedBooks.forEach(function(group, index) {
    var carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

    var cardDeck = document.createElement("div");
    cardDeck.className = "card-deck";

    group.forEach(function(book) {
        var card = document.createElement("div");
        card.className = "card book-card";
        card.addEventListener("mouseover", function() {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseout", function() {
            card.classList.remove("hovered");
        });

        if (book.price < 50) {
            var promotionBar = document.createElement("div");
            promotionBar.className = "promotion-bar";
        
            promotionBar.textContent = "30% OFF";
            
            card.appendChild(promotionBar);
        }

        else {
            var promotionBar = document.createElement("div");
            promotionBar.className = "promotion-bar";
        
            promotionBar.textContent = "50% OFF";
            
            card.appendChild(promotionBar);
        }


        var img = document.createElement("img");
        img.src = book.coverImage;
        img.className = "card-img-top";
        img.alt = book.title;

        // Adiciona um evento de clique à imagem
        img.addEventListener("click", function() {
            window.location.href = '../../produto.html'; // Redireciona para a página HTML desejada
        });

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = book.title;

        var price = document.createElement("p");
        price.className = "card-text";
        price.textContent = "R$ " + book.price.toFixed(2).replace(".", ","); // Formatação de preço

        var buyLink = document.createElement("a");
        buyLink.href = book.buyLink;
        buyLink.className = "btn btn-primary btn-cards";
        buyLink.textContent = "Adicionar ao carrinho";

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(buyLink);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardDeck.appendChild(card);
        });

        carouselItem.appendChild(cardDeck);
        bookContainer.appendChild(carouselItem);
});
}

function chunkArray(array, size) {
var result = [];
for (var i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
}
return result;
}

createBookCarouselPromotion();



/* Cards de Livros em oferta */



var livrosMaisVendidos = [
    {
      title: "Tratado da Verdadeira Devoção à Santíssima Virgem (São Luís Montfort) - capa dura",
      coverImage: "https://cdn.awsli.com.br/400x400/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
      price: 46.20,
      buyLink: "../../carrinho.html"
    },
    {
      title: "Vida de São Mauro (Fausto de Monte Cassino)",
      coverImage: "https://cdn.awsli.com.br/400x400/478/478284/produto/228201698/31-vida-sa-o-mauro---mockup-kzx6gr5lai.png",
      price: 23.56,
      buyLink: "../../carrinho.html"
    },
    {
        title: "Autoaperfeiçoamento - Rudolf Allers (CAPA DURA)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/226278119/photo_2023-07-24_00-18-51-y9xwrs0kae.jpg",
        price: 84.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Educação Sexual e Relações Humanas - Rudolf Allers (Capa Dura)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/245429878/frente-guy6xdc36y.jpg",
        price: 89.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Combo Poemas - Sergio de Carvalho Pachá",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/231037583/sem-t-tulo-1-63t9qo4vum.jpg",
        price: 97.80,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Imitação de Cristo - Tomás de Kempis (CAPA DURA)",
        coverImage: "https://cdn.awsli.com.br/300x300/618/618258/produto/106653494/bd9233f774.jpg",
        price: 49.90,
        buyLink: "../../carrinho.html"
    },
    {
        title: "Catecismo de São Pio X (Ilustrado e Comentado)",
        coverImage: "assets/images/livro2.jpg",
        price: 34.99,
        buyLink: "../../carrinho.html"
    },
    {
        title: "O Criador e a Criatura - as Maravilhas do Amor Divino (Pe. William Faber)",
        coverImage: "https://cdn.awsli.com.br/400x400/478/478284/produto/242091415/o-criador-e-a-criatura_capa-3d-para-loja-l4hk68e3nn.png",
        price: 124.60,
        buyLink: "../../carrinho.html"
    },
  ];

// Função para criar os cards dos livros no carrossel
function createBookCarouselBestSellers() {
    var bookContainer = document.getElementById("bookContainerBestSellers");

    // Agrupa os livros em conjuntos de 5
    var groupedBooks = chunkArray(livrosMaisVendidos, 4);

    groupedBooks.forEach(function(group, index) {
    var carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

    var cardDeck = document.createElement("div");
    cardDeck.className = "card-deck";

    group.forEach(function(book) {
    var card = document.createElement("div");
    card.className = "card book-card";
    card.addEventListener("mouseover", function() {
        card.classList.add("hovered");
    });
    card.addEventListener("mouseout", function() {
        card.classList.remove("hovered");
    });

    if (book.price < 50) {
        var promotionBar = document.createElement("div");
        promotionBar.className = "promotion-bar";
    
        promotionBar.textContent = "30% OFF";
        
        card.appendChild(promotionBar);
    }

    else {
        var promotionBar = document.createElement("div");
        promotionBar.className = "promotion-bar";
    
        promotionBar.textContent = "50% OFF";
        
        card.appendChild(promotionBar);
    }

    var img = document.createElement("img");
    img.src = book.coverImage;
    img.className = "card-img-top";
    img.alt = book.title;

    img.addEventListener("click", function() {
        window.location.href = '../../produto.html'; // Redireciona para a página HTML desejada
    });

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = book.title;

    var price = document.createElement("p");
    price.className = "card-text";
    price.textContent = "R$ " + book.price.toFixed(2).replace(".", ","); // Formatação de preço

    var buyLink = document.createElement("a");
    buyLink.href = book.buyLink;
    buyLink.className = "btn btn-primary btn-cards";
    buyLink.textContent = "Adicionar ao carrinho";

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(buyLink);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardDeck.appendChild(card);
    });

    carouselItem.appendChild(cardDeck);
    bookContainer.appendChild(carouselItem);
});
}

// Função para dividir um array em grupos de tamanho n
function chunkArray(array, size) {
var result = [];
for (var i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
}
return result;
}

// Chame a função para criar os cards dos livros no carrossel
createBookCarouselBestSellers();