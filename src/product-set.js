import products from './data/products.js';


class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }
    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }
    findById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                return product;
            }
        }
    }
    addToResultsArray(dataArray, id) {
        let lineItem = dataArray.findById(id);
        if(lineItem) {
            lineItem.appearanceCount++;
        } else {
            lineItem = {
                id: id,
                appearanceCount: 1,
                selectedCount: 0
            };
            dataArray.list.push(lineItem);
        }
    }
    addToNameArray(dataArray, id) {
        const productList = new ProductSet(products);
        let product = productList.findById(id);
        let lineItem = dataArray.findById(id);
        if(!lineItem) {
            lineItem = { 
                name: product.name,
                id: id
            };
            dataArray.list.push(lineItem);
        } else {
            return;
        }
    }
    incrementSelectedCount(dataArray, id) {
        let lineItem = dataArray.findById(id);
        lineItem.selectedCount++;
    }
}

export default ProductSet;