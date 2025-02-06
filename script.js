const products = [
    {
        name: "PIN Pokestgo",
        description: "Representa a una de las comunidades más grandes de latinoamerica y del mundo",
        image: "/Images/pinps.png",
        price: "$5.000"
    },
    {
        name: "PIN Safari City Santiago 2025",
        description: "El recuerdo perfecto de un evento único",
        image: "/Images/pinsc.jpg",
        price: "$8.000"

    },
    {
        name: "PROXIMAMENTE Kit City Safari x Pokestgo",
        description: "Más detalles dentro de poco",
        image: "/Images/soon.png",
        price: "$20.000"
    },
    {
        name: "PROXIMAMENTE Camiseta Pokestgo",
        description: "Más detalles dentro de poco",
        image: "/Images/soon1.png",
        price: "$20.000"
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
                        <div class="product-price">${product.price}</div>
                    </div>
                `;

        productContainer.appendChild(productCard);
    });
}

// page load
document.addEventListener('DOMContentLoaded', renderProducts);