// ToDo: create RNFS method to read global config
//The model of data of Department
const initialState = {
    course1: {groups:{},link:""},
    course2: {groups:{},link:""},
    course3: {groups:{},link:""},
    course4: {groups:{},link:""},
    course5: {groups:{},link:""}
};

// groups - > nameOfGroup : list of deadlines

// action => type, value, course

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
        case "ADD_HOMEWORK":{
            let courses = state;
            let homeworks = courses["course"+action.course].groups[action.group];
            homeworks.push(action.value);
            return {
                ...courses
            };
        }
        case "DELETE_HOMEWORK":{
            let courses = state;
            let homeworks = courses["course"+action.course].groups[action.group];
            let obj = homeworks.find((currElem)=>{
                if(currElem.id===action.value.id) return true;
                else return false;
            });
            homeworks.splice(homeworks.indexOf(obj),1);
            return {
                ...courses
            };
        }
        case "CHANGE_HOMEWORK":{
            let courses = state;
            let homeworks = courses["course"+action.course].groups[action.group];
            let obj = homeworks.find((currElem)=>{
                if(currElem.id===action.value.id) return true;
                else return false;
            });
            homeworks[homeworks.indexOf(obj)] = action.value;
            return {
                ...courses
            };
        }
        case "CHANGE_HOMEWORK_COURSE_LINK":{
            let courses = state;
            courses['course'+action.course].link = action.value;
            return {
                ...courses
            };
        }
        case "DELETE_HOMEWORK_COURSE_GROUP":{
            let courses = state;
            let groups = courses['course'+action.course].groups;
            delete groups[action.value];
            return{
                ...courses
            }
        }
        case "ADD_HOMEWORK_COURSE_GROUP":{
            let courses = state;
            let groups = courses['course'+action.course].groups;
            groups[action.value] = [];
            return{
                ...courses
            }
        }
        case "LOAD_HOMEWORKS":{
            let courses = state;
            for(let i = 1; i < 6; i++){
                let groups = action.value["course"+i].groups;
                let link = action.value["course"+i].link;
                if(groups){
                    for(let groupKey of Object.keys(groups)){
                        let group = ObjectToArray(groups[groupKey]);
                        for(let homework of group){
                            homework.date = new Date(homework.date);
                        }
                        groups[groupKey] = group;
                    }
                    courses["course"+i].groups = groups;
                }
                if(link){
                    courses["course"+i].link = link;
                }
            }
            return {
                ...courses
            }
        }
    }
    return state;
};
