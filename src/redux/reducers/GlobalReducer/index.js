// ToDo: create RNFS method to read global config
//The model of data of Department
const initialState = {
    hideHint: false,
    studyBeginAt: new Date(),
    adminMode: false,
    isSavingProcess:false
};

export default function(state=initialState,action){
    switch(action.type){
        case 'HIDE':{
            state.hideHint = true;
            return {
                ...state
            }
        }
        case 'HIDE_FULL':{
            state.hideHint = true;
            return {
                ...state
            }
        }
        case "CHANGE_STUDY_DATE_BEGIN":{
            state.studyBeginAt = action.value;
            return {
                ...state
            }
        }
        case "ACTIVATE_ADMIN_MODE":{
            state.adminMode = true;
            return {
                ...state
            }
        }
        case "SAVE_GLOBAL_DATA":{
            state.isSavingProcess = true;
            return {
                ...state
            }
        }
        case "RESET_SAVING_MODE":{
            state.isSavingProcess = false;
            return {
                ...state
            }
        }
    }
    return state;
};
