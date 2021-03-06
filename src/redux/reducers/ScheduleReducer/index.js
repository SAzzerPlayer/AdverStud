const redux = require('redux');

//The model of data of Department
const initialState = {
    course1:{groups:{},minings:[],sessions:[]},
    course2:{groups:{},minings:[],sessions:[]},
    course3:{groups:{},minings:[],sessions:[]},
    course4:{groups:{},minings:[],sessions:[]},
    course5:{groups:{},minings:[],sessions:[]}
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
        case "CHANGE_WEEKLY_SCHEDULE":{
            let courses = state;
            let schedule = courses["course"+action.course].groups[action.group];
            if(action.week === "ЧИСЕЛЬНИК"){
                schedule.numerator = action.value;
            }
            else schedule.denominator = action.value;
            return {...courses};
        }
        case "ADD_SCHEDULE_COURSE_GROUP":{
            let courses = state;
            let groups = courses['course'+action.course].groups;
            console.log(groups);
            groups[action.value] = {
                numerator:{
                    monday: "Порожньо",
                    tuesday: "Порожньо",
                    wednesday: "Порожньо",
                    thursday: "Порожньо",
                    friday: "Порожньо"
                },
                denominator:{
                    monday: "Порожньо",
                    tuesday: "Порожньо",
                    wednesday: "Порожньо",
                    thursday: "Порожньо",
                    friday: "Порожньо"
                },
                minings: [],
                sessions: []
            };
            return {
                ...courses
            }
        }

        case "DELETE_SCHEDULE_COURSE_GROUP":{
            let courses = state;
            let groups = courses['course'+action.course].groups;
            delete groups[action.value];
            return {
                ...courses
            }
        }
        case "ADD_SESSION":{
            let courses = state;
            console.log(action.value);
            let sessions = courses["course"+action.course].groups[action.group].sessions;
            sessions.push(action.value);
            return{
                ...courses
            };
        }

        case "CHANGE_SESSION":{
            let courses = state;
            let sessions = courses["course"+action.course].groups[action.group].sessions;
            let obj = sessions.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            sessions[sessions.indexOf(obj)] = action.value;
            return{
                ...courses
            };
        }

        case "DELETE_SESSION":{
            let courses = state;
            let sessions = courses["course"+action.course].groups[action.group].sessions;
            let obj = sessions.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            sessions.splice(sessions.indexOf(obj),1);
            return{
                ...courses
            };
        }

        case "ADD_MINING":{
            let courses = state;
            let minings = state["course"+action.course].groups[action.group].minings;
            minings.push(action.value);
            return {
                ...courses
            }
        }

        case "CHANGE_MINING":{
            let courses = state;
            let minings = courses["course"+action.course].groups[action.group].minings;
            let obj = minings.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            minings[minings.indexOf(obj)] = action.value;
            return{
                ...courses
            };
        }

        case "DELETE_MINING":{
            let courses = state;
            let minings = courses["course"+action.course].groups[action.group].minings;
            let obj = minings.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            minings.splice(minings.indexOf(obj),1);
            return{
                ...courses
            };
        }

        case "LOAD_SCHEDULE":{
            let schedule = action.value;
            for(let i=1;i<6;i++){
                if(schedule["course"+i]) {
                    if (schedule["course" + i].minings) {
                        schedule["course"+i].minings = ObjectToArray(schedule["course"+i].minings);
                        state["course" + i].minings = schedule["course" + i].minings;
                        for(let elem of state["course"+i].minings){
                            console.log(typeof elem.date);
                            elem.date = new Date(elem.date);
                        }
                    }
                    if (schedule["course" + i].sessions) {
                        schedule["course"+i].sessions = ObjectToArray(schedule["course"+i].sessions);
                        state["course" + i].sessions = schedule["course" + i].sessions;
                        for(let elem of state["course"+i].sessions){
                            elem.date = new Date(elem.date);
                        }
                    }
                    if (schedule["course" + i].groups) {
                        state["course" + i].groups = schedule["course" + i].groups;
                        for(let group of Object.keys(state["course"+i].groups)){
                            let groupObj = state["course"+i].groups[group];
                            if(!groupObj.sessions) groupObj.sessions = [];
                            else{
                                groupObj.sessions = ObjectToArray(groupObj.sessions);
                                for(let elem of groupObj.sessions){
                                    elem.date = new Date(elem.date);
                                }
                            }
                            if(!groupObj.minings) groupObj.minings = [];
                            else{
                                groupObj.minings = ObjectToArray(groupObj.minings);
                                for(let elem of groupObj.minings){
                                    elem.date = new Date(elem.date);
                                }
                            }
                        }
                    }
                }
            }
            return {
                ...state
            };
        }
    }
    return state;
};
