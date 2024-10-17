const favorites = new Set();

function toggleFavorite(product, favoriteButton) {
    const isFavorite = favorites.has(product);

    if (isFavorite) {
        favorites.delete(product);
        favoriteButton.innerHTML = "<i class='bx bx-heart'></i>";
    } else {
        favorites.add(product);
        favoriteButton.innerHTML = "<i class='bx bxs-heart'></i>";
    }
}

function displayProducts(products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;

        if ((index + 1) % 5 === 0) {
            img.classList.add('w');
        }

        const shortDesc = document.createElement('div');
        shortDesc.classList.add('short-desc');
        shortDesc.textContent = product['short-desc'];

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = product.price;

        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        favoriteButton.innerHTML = "<i class='bx bx-heart'></i>";

        favoriteButton.addEventListener('click', () => {
            toggleFavorite(product, favoriteButton);
        });

        const ellipsisDiv = document.createElement('div');
        ellipsisDiv.classList.add('ellipsis');
        ellipsisDiv.textContent = '...';

        productDiv.appendChild(img);
        productDiv.appendChild(shortDesc);
        productDiv.appendChild(price);
        productDiv.appendChild(favoriteButton);
        productDiv.appendChild(ellipsisDiv);

        productsContainer.appendChild(productDiv);
    });
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        displayProducts(data.products);
    })
    .catch(error => {
        console.error('Errore nel caricamento dei dati:', error);
    });
