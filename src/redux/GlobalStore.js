import reducers from './reducers';

const redux = require('redux');

// This method should save data to firebase
function prepareData(){
    console.log("Store has been updated!");
}

const store = redux.createStore(reducers);

store.subscribe(prepareData);

export default store;
