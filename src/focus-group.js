import products from './data/products.js'; 
import ProductSet from './product-set.js';

const product1name = document.getElementById('product-1-name');
const product2name = document.getElementById('product-2-name');
const product3name = document.getElementById('product-3-name');
const product1image = document.getElementById('product-1-image');
const product2image = document.getElementById('product-2-image');
const product3image = document.getElementById('product-3-image');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const counter = document.getElementById('counter');

let productListToSplice = new ProductSet(products);
let count = 1;
let resultsArray = [];
let product1, product2, product3;

displayProducts();
//updateResultsArray//


button1.addEventListener('click', () => {
    displayProducts();
    incrementCounter();
});

button2.addEventListener('click', () => {
    displayProducts();
    incrementCounter();
});

button3.addEventListener('click', () => {
    displayProducts();
    incrementCounter();
});

function randomArrayGenerator(max) {
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
}

function incrementCounter() {
    count++;
    counter.textContent = count + '/25';
}

function displayProducts() {
    const randomArray = randomArrayGenerator(productListToSplice.list.length);
    product1 = productListToSplice.list[randomArray[0]];
    product2 = productListToSplice.list[randomArray[1]];
    product3 = productListToSplice.list[randomArray[2]];
    product1name.textContent = product1.name;
    product2name.textContent = product2.name;
    product3name.textContent = product3.name;
    product1image.src = product1.image;
    product2image.src = product2.image;
    product3image.src = product3.image;
    button1.value = product1.id;
    button2.value = product2.id;
    button3.value = product3.id;
    productListToSplice = new ProductSet(products);
    productListToSplice.removeById(product1.id);
    productListToSplice.removeById(product2.id);
    productListToSplice.removeById(product3.id);
}