import redux from 'redux';
const initialState = {

};
const reducer = (state=initialState,action) => {
    switch(action.name){
        case "0":{
            return state;
        }
    }
    return state;
};

export default reducer;
