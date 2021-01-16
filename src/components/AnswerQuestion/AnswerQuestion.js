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
    const authedUser = props.userInfo[props.authedUser];

    const saveUserAnswer = () => {
        props.saveAnswer({
            author: props.authedUser,
            qid: question_id,
            answer: optionSelected,
        })
    }

    const questionAnswer1 = props.question[question_id].optionOne.text;
    const questionAnswer2 = props.question[question_id].optionTwo.text;

    return (
        <div className="answer_container">
            {authedUser.answers[question_id] === 'optionOne' || authedUser.answers[question_id] === 'optionTwo'
                ? <VoteResult question={props.question}/>
                : <><h1>Would you rather ?</h1>
            <form action="" className="post-container-question-option">
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" value="optionOne"
                        checked={optionSelected==="optionOne"}
                        onChange={() => setOptionSelected("optionOne")}
                    />
                    <label htmlFor="">{questionAnswer1}</label>
                </div>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" name="drone" value="optionTwo"
                        checked={optionSelected==="optionTwo"}
                        onChange={() => setOptionSelected("optionTwo")}
                    />
                    <label htmlFor="">{questionAnswer2}</label>
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
// onChange={() => setDarkMode(prevMode => !prevMode)}/>
const mapStateToProps = state => {
    return {
        question: state.questions.question,
        userInfo: state.users.result,
        authedUser: state.users.authedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveAnswer: (answer) => dispatch(saveAnswer(answer)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerQuestion)
