import * as actionType from '../actions';

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
    ]
};

//reducer
const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_RESULT: 
            return {
                ...state,
                avatars: state.avatars.concat({avatars})
            }
    }
}

export default loginreducer;