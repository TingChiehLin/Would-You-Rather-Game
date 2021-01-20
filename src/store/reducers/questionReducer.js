import * as actionType from '../action/actionsType';
import { updateObject } from '../../utils/utility';

const initialState = {
    question:{},
    answer:{},
}

const questionReducer = (state = initialState, action) => {
     switch(action.type) {
        case actionType.SAVE_QUESTION:
             return updateObject(
                 state, {
                    question: action.questions
                 }
             )
        case actionType.SAVE_ANSWER:
            const {qid, answer, author} = action.answers;
            const questions = state.question; 
    
            const questionToBeUpdated = questions[qid];
            questionToBeUpdated[answer].votes = questionToBeUpdated[answer].votes.concat(author);

            return updateObject(
                state,{
                    ...questions
                }
            )
        default:
            return state
    }
}

export default questionReducer;

// return updateObject(
// case actionType.SAVE_ANSWER:
//     const updatedQuestion = {...state.question[action.answers.qid]};
//     updatedQuestion[action.answers.answer].votes.concat(action.answers.author)
//     return updateObject(
//         state, {
//             [action.answers.qid]: updatedQuestion 
//         }
// )