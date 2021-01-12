import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { FcUp } from 'react-icons/fc';
import '../../utils/utility.scss';
import './AnswerQuestion.scss';
import { connect } from 'react-redux';
import { saveAnswer } from '../../store/action/question';
import { useParams } from 'react-router-dom';

import VoteResult from '../VoteResult/VoteResult';

const AnswerQuestion = (props) => {
    const { question_id } = useParams()
    const [optionSelected, setOptionSelected] = useState('optionOne');
    const [isSubmitted, setisSubmitted] = useState(false);
    const saveUserAnswer = () => {
        saveAnswer({})
        setisSubmitted(true);
    }
    
    return (
        <div className="answer_container">
            {isSubmitted ? <VoteResult question={props.question}/>
            : <><h1>Would you rather ?</h1>
            <form action="" className="post-container-question-option">
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" value="optionOne"
                        checked={optionSelected==="optionOne"}
                        onChange={() => setOptionSelected("optionOne")}
                    />
                    <label htmlFor="">be a Python developer</label>
                </div>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" name="drone" value="optionTwo"
                        checked={optionSelected==="optionTwo"}
                        onChange={() => setOptionSelected("optionTwo")}
                    />
                    <label htmlFor="">be a React developer</label>
                </div>
            </form>
            <button className="post-btn" onClick={saveUserAnswer}>
                <div className="center">
                    <IconContext.Provider value={{size:'1.5rem', className:'white'}}>
                        <FcUp/>
                    </IconContext.Provider>
                    <span className="marginLeft">Submit</span>
                </div>
            </button>
            </>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.questions.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveAnswer: () => dispatch(saveAnswer())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerQuestion)


    // export const saveQuestion = ({author, optionOneText, optionTwoText}) => {
    //     return async dispatch => {
    //         const questions = await _saveQuestion({author, optionOneText, optionTwoText});
    //         dispatch(getQuestion_result(questions))
    //         dispatch(user_result())
    //     }
    // }
    
    // export const saveAnswer = ({author, qid, answer}) => {

        // const question = dispatch(
        //     savingQuestion({
        //       optionOneText: e.target.inputone.value,
        //       optionTwoText: e.target.inputtwo.value,
        //       author: user,
        //     })
        //   );