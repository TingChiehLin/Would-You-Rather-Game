import * as actionType from '../action/actionsType';
import { updateObject } from '../../utils/utility';

//store
const initialState = {
    testName: 'Tomme',
    avatars: [
        {
            avatarName: "John",
            avatarImageURL:''
        },
        {
            avatarName: "Tom",
            avatarImageURL:''
        }
    ],
    result:{}
};

// const loginReducer = (state, action) => {
    
// };

//reducer
const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_RESULT: 
            
        const avatars = {
                id: 0,
                name: 'Max',
                avatarURL:''
            }

            // return {
            //     ...state,
            //     avatars: state.avatars.concat(avatars) 
            // }

            return updateObject(state, { avatars: state.avatars.concat(avatars) })
        default:
            return state
    }
}

export default loginreducer;