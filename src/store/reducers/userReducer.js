import * as actionType from '../action/actionsType';
import { updateObject } from '../../utils/utility';

//store
const initialState = {
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
    result:{},
    authedUser:''
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

            return updateObject(
                state, { 
                    avatars: state.avatars.concat(avatars),
                    result: action.result
            })

        case actionType.SET_USERSTATE:
                return updateObject(
                    state, {
                        authedUser: action.userID
                })
        default:
            return state
    }
}

export default loginreducer;