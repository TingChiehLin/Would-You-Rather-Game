import * as actionType from './actions';

const initialState = {
    name: 'John',
    score: 0,
    answers:0,
    question:0,
    isAnswer: false,
    counter: 0,
    message:''
}

const reducer = (state = initialState, action) => {
    if(action.type === 'CREATE_QUESTIONs') {
        return {
            message: state.message
        }
    }
    return state;
};

export default reducer;