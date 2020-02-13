// ToDo: create RNFS method to read global config
//The model of data of Department
const initialState = {
    hideHint: false
};

export default function(state=initialState,action){
    switch(action.type){
        case 'HIDE':{
            state.hideHint = true;
        }
        case 'HIDE_FULL':{
            state.hideHint = true;
        }
    }
    return state;
};
