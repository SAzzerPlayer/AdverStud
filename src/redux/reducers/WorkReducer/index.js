const redux = require('redux');

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
    switch(action.type){
        case "ADD_WORK":{
            const arr = state.arr;
            arr.push(action.value);
            return {
                ...state,
                arr:arr
            };
        }
        case "DELETE_WORK":{
            let arr = state.arr;
            let obj = arr.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            arr.splice(arr.indexOf(obj),1);
            return {
                ...state,
                arr:arr
            }
        }
        case "CHANGE_WORK":{
            let arr = state.arr;
            let obj = arr.find((currElem)=>{
                if(currElem.id === action.value.id) return true;
                else return false;
            });
            arr[arr.indexOf(obj)] = action.value;
            return {
                ...state,
                arr:arr
            }
        }
        case "LOAD_WORKS":{
            let arr = action.value.arr;
            state.arr = ObjectToArray(arr);
            return {
                ...state
            }
        }
    }
    return state;
};
