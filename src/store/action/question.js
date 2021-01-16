import * as actionType from './actionsType';
import { _getQuestions, _saveQuestion, _saveQuestionAnswer }  from '../../utils/_DATA';
import { hideLoading, showLoading } from 'react-redux-loading';
import { user_result } from './user';

//Action Creator
const showQuestion_Result = (questions) => ({
        type: actionType.SAVE_QUESTION,
        questions
})

const showAnswer_Result = (answers) => ({
        type: actionType.SAVE_ANSWER,
        answers
})

//Middleware
export const getQuestion_result = () => {
    return async dispatch => {
        const questions = await _getQuestions();
        dispatch(showLoading())
        dispatch(showQuestion_Result(questions))
        dispatch(hideLoading())
    }
}

export const saveQuestion = ({author, optionOneText, optionTwoText}) => {
    return async dispatch => {
        const questions = await _saveQuestion({author, optionOneText, optionTwoText});
        dispatch(getQuestion_result(questions))
        dispatch(user_result())
    }
}

export const saveAnswer = ({author, qid, answer}) => {
    return async dispatch => {
        await _saveQuestionAnswer({
                authedUser: author, 
                qid, 
                answer
        });
        dispatch(showAnswer_Result({author, qid, answer}))
        dispatch(user_result())
    }
}
