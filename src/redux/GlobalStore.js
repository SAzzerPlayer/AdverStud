import reducers from './reducers';
import Firebase from 'firebase';
const config = {
    apiKey: 'AIzaSyCN-82LRe04UT_2dLclQEVokxJnGZcVEQM',
    authDomain: '549354595412-54ubaukb029poppioa9pmtbsuekj5ndj.apps.googleusercontent.com',
    databaseURL: 'https://adverstud.firebaseio.com',
    projectId: 'adverstud',
    storageBucket: 'adverstud.appspot.com',
    messagingSenderId: 'adverstud'
};
const redux = require('redux');

// This method should save data to firebase


const store = redux.createStore(reducers);

function sendData(state) {
    console.log(state);
    if(!Firebase.apps.length) {
        const app = Firebase.initializeApp(config);
    }
    const database = Firebase.database();

    database.ref("/").update(state);
}

function prepareData(){
    let state = store.getState();
    if(state.global.isSavingProcess){
        let data = {
            teachers:state.teacher,
            schedule:state.schedule,
            departments:state.department,
            opportunities:state.opportunity,
            works:state.work,
            homework:state.homework
        };
        sendData(data);
    }
    console.log("Store has been updated!");
}

store.subscribe(prepareData);

export default store;
