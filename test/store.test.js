import store from '../src/store.js';

const test = QUnit.test;

QUnit.module('Store');

store.storage = window.sessionStorage;

test('save/get', assert => {
    // arrange
    const testObject = {
        name: 'Banana Slicer',
        id: 'banana-slicer',
        appearanceCount: 1,
        selectedCount: 0
    };
    const key = 'testKey';
    // act
    store.save(key, testObject);
    const retrieved = store.get(key);
    
    // assert
    assert.deepEqual(testObject, retrieved);
});

test('getAllTimeResultsArray returns empty array when empty', assert => {
    // arrange
    const expected = [];
    // act
    const result = store.getAllTimeResultsArray();
    
    // assert
    assert.deepEqual(expected, result);
});