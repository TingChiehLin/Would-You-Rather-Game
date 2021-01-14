import * as actionType from '../action/actionsType';
import { updateObject } from '../../utils/utility';

const initialState = {
    question:{},
    answers:{},
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
            return updateObject(
                state, {
                    answer: action.answers
                }
            )
        default:
            return state
     }

}

export default questionReducer;