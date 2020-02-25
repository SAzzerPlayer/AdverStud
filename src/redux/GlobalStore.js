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
    let database = null;
    if(Firebase.apps.length === 0) {
        let app = Firebase.initializeApp(config);
        database = app.database();
    }
    else database = Firebase.database();

    state.snapshotAtDate = state.global.snapshotAtDate;

    database.ref("/").update(state);
}

function prepareData(){
    let state = store.getState();
    if(state.global.isSavingProcess){
        let data = {
            studyBeginAt: state.global.studyBeginAt,
            teachers:state.teacher,
            schedule:JSON.parse(JSON.stringify(state.schedule)),
            departments:JSON.parse(JSON.stringify(state.department)),
            opportunities:state.opportunity,
            works:state.work,
            homework:JSON.parse(JSON.stringify(state.homework)),
            enrollee:JSON.parse(JSON.stringify(state.enrollee)),
            global: {
                studyBeginAt:state.global.studyBeginAt,
                snapshotAtDate:new Date()
            }
        };
        sendData(data);
    }
}

store.subscribe(prepareData);

export default store;
