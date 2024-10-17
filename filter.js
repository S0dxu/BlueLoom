const slider = document.querySelector('.top');
const title = document.querySelector('.title');

function filterProducts(category, type) {
    slider.style.display = "none";
    title.style.display = "none";
    
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.products.filter(product => 
                product.description.startsWith(category) && 
                product.description.toLowerCase().includes(type.toLowerCase())
            );
            displayProducts(filteredProducts);
        })
        .catch(error => {
            console.error('Errore nel caricamento dei prodotti:', error);
        });
}

function loadAllProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.products);
            slider.style.display = "block";
            title.style.display = "block";
        })
        .catch(error => {
            console.error('Errore nel caricamento dei prodotti:', error);
        });
}

document.querySelectorAll('.filter').forEach(filterLink => {
    filterLink.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        const type = this.getAttribute('data-type');
        filterProducts(category, type);
    });
});

document.querySelector('.homepage').addEventListener('click', function(event) {
    event.preventDefault();
    loadAllProducts();
});
