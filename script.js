const products = [
    {
        name: "Desafío Pasaporte",
        description: "Completa el desafío de Pokestgo y participa por una Nintendo Switch Oled White y una Pokémon GO Plus+",
        image: "Images/SafariCity_original.png",
        link: "https://citysafari.pokestgo.cl/"

    },
    {
        name: "Guía del Explorador",
        description: "Revisa nuestra guía del explorador, preparada por el equipo de Pokestgo para los entrenadores que disfruten del City Safari de Santiago 2025",
        image: "Images/portadaguia.png",
        link: "https://citysafari.pokestgo.cl/guia/"
        
    },
    {
        name: "NIANTIC CAMPFIRE",
        description: "Encuentra las rutas oficiales y las quedadas de la comunidad en Campfire",
        image: "Images/cf.png",
        link: "https://cmpf.re/pkvNCP"

    },
    {
        name: "Únete al Grupo de Whatsapp",
        description: "Comparte e informate de todo en nuestra comunidad",
        image: "Images/POKESTGO_LOGO.png",
        link: "https://chat.whatsapp.com/G8pMjw4g8pyAPdvQiWOXtx?"
    },
    {
        name: "Pasaporte Pokestgo",
        description: "Continúa participando en otros eventos de la comunidad en nuestro pasaporte!",
        image: "Images/passportgo.png",
        link: "https://pasaporte.pokestgo.cl/"
    }
];

function renderProducts() {
    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                `;

        productCard.addEventListener('click', () => {
            window.open(product.link, '_blank');
        });

        productCard.style.cursor = 'pointer';


        productContainer.appendChild(productCard);
    });
}

// page load
document.addEventListener('DOMContentLoaded', renderProducts);
