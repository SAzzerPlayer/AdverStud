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
        case "LOAD_HOMEWORK":{
            let courses = state;
            for(let i = 1; i < 6;i++){
                let data = action.value["course"+i];
                if(data.groups) courses["course"+i].groups = data.groups;
                if(data.link) courses["course"+i].link = data.link;
            }
            return {
                ...courses
            }
        }
    }
    return state;
};
