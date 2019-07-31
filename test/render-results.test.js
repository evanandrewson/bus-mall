import renderResults from '../src/render-results.js';

const test = QUnit.test;

QUnit.module('Render Results');

test('Renders one entry of results', assert => {
    // arrange
    const arrayItem = {
        id: 'banana-slicer',
        appearanceCount: 3,
        selectedCount: 2
    };
    const nameArrayItem= {
        name: 'Banana Slicer'
    };
    const expected = '<p>You selected Banana Slicer 2 times out of 3 appearances, 67% of the time.</p>';

    // act

    const result = renderResults(arrayItem, nameArrayItem).outerHTML;
    
    // assert
    assert.equal(result, expected);
});