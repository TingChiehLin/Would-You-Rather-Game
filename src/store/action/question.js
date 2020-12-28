import * as actionType from './actionsType';
import { _getQuestions }  from '../../utils/_DATA';
import { hideLoading, showLoading } from 'react-redux-loading';


//Action Creator
const showResult = (questions) => ({
        type: actionType.GET_QUESTION,
        questions
})

export const question_result = () => {
    return async dispatch => {
        const questions = await _getQuestions();
        dispatch(showResult(questions))
    }
}

export const create_question = (message) => {
    return {
        type: actionType.CREATE_QUESTIONS,
        message: message
    };
}
