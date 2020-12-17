import * as actions from './actionTypes';

export const addNewComment = description => ({
    type: actions.Add_New_Comment,
    user: {
        id:0,
        name:'Milla Jovovich',
        description: 'Redux',
        isAnswer: false
    }
});

// function addNewComment(description) {
//     return {
//         type: action.Add_New_Comment,

//     }
// }

//Action Creator

function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

