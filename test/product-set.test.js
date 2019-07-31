import ProductSet from '../src/product-set.js';
import products from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('product set');

test('remove by ID', assert => {
    // arrange
    const productSet = new ProductSet(products);
    const productToRemove = products[0];
    
    // act
    productSet.removeById(productToRemove.id);
    
    // assert
    assert.notOk(productSet.list.includes(productToRemove));
});