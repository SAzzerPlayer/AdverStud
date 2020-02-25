const redux = require('redux');

//The model of data of Department
const initialState = {
    quests:[

    ],
    contests:[

    ],
    prepareZNO:[

    ],
    link:""
};

function ObjectToArray(obj){
    if(Array.isArray(obj)) return obj;
    else {
        let arr = [];
        for (let key of Object.keys(obj)) {
            arr.push(obj[key]);
        }
        return arr;
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case "ADD_QUEST":{
            let quests = state.quests;
            quests.push(action.value);
            return {
                ...state
            }
        }

        case "DELETE_QUEST":{
            let quests = state.quests;
            let obj = quests.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            quests.splice(quests.indexOf(obj),1);
            return {
                ...state
            }
        }

        case "CHANGE_QUEST":{
            let quests = state.quests;
            let obj = quests.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            quests[quests.indexOf(obj)]=action.value;
            return {
                ...state
            }
        }

        case "ADD_CONTEST":{
            let contests = state.contests;
            contests.push(action.value);
            return {
                ...state
            }
        }

        case "DELETE_CONTEST":{
            let contests = state.contests;
            let obj = contests.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            contests.splice(contests.indexOf(obj),1);
            return {
                ...state
            }
        }

        case "CHANGE_CONTEST":{
            let contests = state.contests;
            let obj = contests.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            contests[contests.indexOf(obj)]=action.value;
            return {
                ...state
            }
        }

        case "ADD_PREPARE_ZNO":{
            let prepares = state.prepareZNO;
            prepares.push(action.value);
            return {
                ...state
            }
        }

        case "DELETE_PREPARE_ZNO":{
            let prepares = state.prepareZNO;
            let obj = prepares.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            prepares.splice(prepares.indexOf(obj),1);
            return {
                ...state
            }
        }

        case "CHANGE_PREPARE_ZNO":{
            let prepares = state.prepareZNO;
            let obj = prepares.find((element)=>{
                if(element.id === action.value.id) return true;
                else return false;
            });
            prepares[prepares.indexOf(obj)]=action.value;
            return {
                ...state
            }
        }

        case "CHANGE_ENROLLEE_LINK":{
            state.link = action.value;
            return {
                ...state
            }
        }

        case "LOAD_ENROLLEE":{
            let data = action.value;
            if(data.quests){
                let quests = ObjectToArray(data.quests);
                for(let element of quests){
                    element.date = new Date(element.date);
                }
                state.quests = quests;
            }
            if(data.contests){
                let contests = ObjectToArray(data.contests);
                for(let element of contests){
                    element.date = new Date(element.date);
                }
                state.contests = contests;
            }
            if(data.prepareZNO) state.prepareZNO = ObjectToArray(data.prepareZNO);
            if(data.link) state.link = data.link;
            return {
                ...state
            }
        }
    }
    return state;
};
