
import {Teacher} from "../../../libs/classes";

//The model of data of Department
const initialState = {
    arr:[]
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
    console.log(action);
    switch(action.type){
        case "ADD_TEACHER":{
            let arr = state.arr;
            arr.push(action.value);
            return{
                ...state,
                arr:arr
            }
        }
        case "DELETE_TEACHER":{
            //deleting user by his email
            let arr = state.arr;
            let id = action.value.id;
            let obj = arr.find((element)=>{
                if(element.id === id) return true;
                else return false;
            });
            arr.splice(arr.indexOf(obj),1);
            return {
                ...state,
                arr:arr
            }
        }
        case "CHANGE_TEACHER":{
            let arr = state.arr;
            let obj = action.value;
            let teacher = arr.find((element)=>{
                if(element.id === obj.id) return true;
                else return false;
            });
            arr[arr.indexOf(teacher)] = obj;
            return {
                ...state,
                arr:arr
            }
        }
        case "LOAD_TEACHERS":{
            let arr = action.value;
            state.arr = ObjectToArray(arr);
            return {
                ...state
            }
        }
    }
    return state;
};
