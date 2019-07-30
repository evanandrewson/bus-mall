import products from './data/products.js';
import renderProduct from './render-product.js';

const imageDiv = document.getElementById('images');
const product1name = document.getElementById('product-1-name');
const product2name = document.getElementById('product-2-name');
const product3name = document.getElementById('product-3-name');
const product1image = document.getElementById('product-1-image');
const product2image = document.getElementById('product-2-image');
const product3image = document.getElementById('product-3-image');

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

const randomArray = randomArrayGenerator(products.length);
