const redux = require('redux');

//The model of data of Department
const initialState = {
    arr:[]
};

export default function(state=initialState,action){
    switch(action.type){
        case "ADD_DEPARTMENT":{
            const arr = state.arr;
            arr.push(action.value);
            return {
                ...state,
                arr:arr
            };
        }
        case "DELETE_DEPARTMENT":{
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
        case "CHANGE_DEPARTMENT":{
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
        case "LOAD_DEPARTMENTS":{
            let arr = action.value.arr;
            for(let elem of arr){
                elem.date = new Date(elem.date);
            }
            state.arr = arr;
            return {
                ...state
            }
        }
    }
    return state;
};
