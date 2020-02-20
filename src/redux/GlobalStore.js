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

function prepareDateHomework(data){
    let newData = JSON.parse(JSON.stringify(data));
    for(let i = 1; i < 6; i++){
        let groups = newData["course"+i].groups;
        if(groups){
            for(let groupKey of Object.keys(groups)){
                for(let homework of groups[groupKey]){
                    homework.date = homework.date.toString();
                }
            }
        }
    }
    return newData;
}

function prepareDateSchedule(data){
    let newData = JSON.parse(JSON.stringify(data));
    for(let key of Object.keys(newData)){
        if(newData[key].minings) {
            for (let elem of newData[key].minings) {
                elem.date = elem.date.toString();
            }
        }
        if(newData[key].sessions) {
            for (let elem of newData[key].sessions) {
                elem.date = elem.date.toString();
            }
        }
    }
    return newData;
}

function prepareDateDepartment(data){
    let newData = JSON.parse(JSON.stringify(data));
    for(let elem of newData.arr){
        elem.date = elem.date.toString();
    }
    return newData;
}

function prepareDateEnrollee(data){
    let newData = JSON.parse(JSON.stringify(data));
    for(let elem of newData.quests){
        elem.date = elem.date.toString();
    }
    for(let elem of newData.contests){
        elem.date = elem.date.toString();
    }
    return newData;
}

function prepareData(){
    let state = store.getState();
    if(state.global.isSavingProcess){
        state.schedule = prepareDateSchedule(state.schedule);
        state.department = prepareDateDepartment(state.department);
        state.homework = prepareDateHomework(state.homework);
        state.enrollee = prepareDateEnrollee(state.enrollee);
        let data = {
            studyBeginAt: state.global.studyBeginAt,
            teachers:state.teacher,
            schedule:state.schedule,
            departments:state.department,
            opportunities:state.opportunity,
            works:state.work,
            homework:state.homework,
            enrollee:state.enrollee,
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
