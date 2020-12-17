import * as action from './actionTypes';

function reducer(state = [], action) {
    if (action.type === ASK_QUESTION) {
        return [
            ...state    ,
            {
                
            }
        ]
    }

    if (action.type === Add_New_User) {
        return state.concat()
    }
    return state
    // const update = {...state};
}

