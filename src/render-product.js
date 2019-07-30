import products from './data/products.js';

const renderProduct = function(index) {
    const product = products[index];

    const button = document.createElement('button');

    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    button.appendChild(h3);

    const image = document.createElement('img');
    image.src = product.image;
    image.classList.add('button-image');
    image.id = product.id;
    button.appendChild(image);

    /*
    currently working on this code
    button.addEventListener('click', () => {
        
    });
    */

    return button;
};

export default renderProduct;