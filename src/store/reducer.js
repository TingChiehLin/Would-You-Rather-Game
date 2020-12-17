import * as actionType from './actions';

const initialState = {
    avatar: {
        avatarname: 'John',
        avatarURL: ''
    },
    score: 0,
    answers:0,
    question:0,
    isAnswer: false,
    counter: 0,
    message:'',
    like:0,
    results:[],
    id:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_QUESTIONS:
            return {
                ...state,
                message: state.message
            }
        case actionType.REMOVE_QUESTION:
            return {
                ...state,
               
            }
        case actionType.ADD_LIKE:
            return {
                ...state,
                like: state.like + action.like
            }
        case actionType.STORE_RESULT:
            return {
                ...state.avatar,
                avatar: {
                    ...state.avatar,
                    [action.avatarName]: state.avataraction[action.avatarName] + 1
                }
                // result: state.results.concat({id: new Date(), })
            }
        //Updating Arrays Immutably
        case actionType.DELETE:
            const id = 2;
            const newArray = [...state.results];
            newArray.splice(id, 1);
            const updateArray = state.results.filter((result,index) => index != id);
            return {
                ...state,
                results: newArray
            }
        default:
            return state;
    }
};

export default reducer;