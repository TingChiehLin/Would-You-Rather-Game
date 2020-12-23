import * as actionType from './actionsType';
import { _getQuestions }  from '../../utils/_DATA';

//Action Creator
const showResult = async() => {
    const updateQuestionResult = _getQuestions();
    return {
        type: actionType.GET_QUESTION,
        questions: updateQuestionResult
    }
}

// Middleware

export const question_result = () => {
    
    return async dispatch => {
        dispatch(await showResult())
    }
}