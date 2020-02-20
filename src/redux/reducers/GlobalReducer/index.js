
import RNFS from 'react-native-fs';

//The model of data of Department
const initialState = {
    hideHint: false,
    studyBeginAt: new Date(),
    adminMode: false,
    isSavingProcess:false,
    snapshotAtDate: new Date()
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
            RNFS.writeFile(RNFS.DocumentDirectoryPath+"/config.json",JSON.stringify({"hide_prompts":true}));
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
        case "LOAD_GLOBAL":{
            state.snapshotAtDate = new Date(action.value.snapshotAtDate);
            state.studyBeginAt = new Date(action.value.studyBeginAt);
            return {
                ...state
            }
        }
    }
    return state;
};
