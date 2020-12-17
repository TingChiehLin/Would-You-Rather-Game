import * as actionType from '../actions';

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
    ]
};

//reducer
const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_RESULT: 
            const avatars = {
                id: 0,
                name: 'Max',
                avatarURL:''
            }

            return {
                ...state,
                avatars: state.avatars.concat({avatars})
            }
    }
}

export default loginreducer;