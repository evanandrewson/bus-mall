const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        let json = store.storage.getItem(key);
        if(!json || json === 'undefined') {
            json = '[]';
        }
        const item = JSON.parse(json);
        return item;
    },
    getAllTimeResultsArray() {
        let allTimeResultsArray = store.get('all-time-results-array');
        if(!allTimeResultsArray || allTimeResultsArray === 'undefined') {
            allTimeResultsArray = [];
        }
        return allTimeResultsArray;
    },
    getAllTimeNameArray() {
        let allTimeNameArray = store.get('all-time-name-array');
        if(!allTimeNameArray) {
            allTimeNameArray = [];
        }
        return allTimeNameArray;
    }
};

export default store;