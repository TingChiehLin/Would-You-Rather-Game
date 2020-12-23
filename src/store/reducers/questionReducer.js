import * as actionType from '../action/actionsType';
import { updateObject } from '../../utils/utility';

const initialState = {
    question:{}
}

const questionReducer = (state = initialState, action) => {
     switch(action.type) {
        case actionType.GET_QUESTION:
             return updateObject(
                 state, {
                    question: action.questions
                 }
             )
        default:
            return state
     }

}

export default questionReducer;