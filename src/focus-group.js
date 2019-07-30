import products from './data/products.js';
import renderProduct from './render-product.js';

const imageDiv = document.getElementById('images');

const randomArrayGenerator = function(max) {
    let number1 = Math.floor(Math.random() * max);
    let number2 = Math.floor(Math.random() * max);
    let number3 = Math.floor(Math.random() * max);
    while(number1 === number2) {
        number2 = Math.floor(Math.random() * max);
    }
    while(number1 === number3 || number2 === number3) {
        number3 = Math.floor(Math.random() * max);
    }
    return [number1, number2, number3];
};

const randomArray = randomArrayGenerator(20);

for(let i = 0; i < 3; i++) {
    let product = renderProduct(randomArray[i]);
    imageDiv.appendChild(product);
    products[randomArray[i]].appearanceCount++;
}