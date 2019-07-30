import renderProduct from '../src/render-product.js';

const test = QUnit.test;

QUnit.module('Render product');

test('Render single product', assert => {
    // arrange
    const index = 0;
    const expected = '<button><h3>Banana Slicer</h3><img src="./assets/products/banana-slicer.jpg" class="button-image" id="banana-slicer"></button>';

    // act
    const result = renderProduct(index).outerHTML;
    
    // assert
    assert.equal(result, expected);
});