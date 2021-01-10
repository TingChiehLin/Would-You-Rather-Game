import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { FcUp } from 'react-icons/fc';
import '../../utils/utility.scss';
import './AnswerQuestion.scss';

import { connect } from 'react-redux';
import {saveAnswer} from '../../store/action/question';

const AnswerQuestion = (props) => {
    const { question_id } = useParams()
    const [optionSelected, setOptionSelected] = useState('optionOne');

    const saveUserAnswer = () => {
        saveAnswer({})
        
    }

    return (
        <div className="answer_container">
            <h1>Would you rather ?</h1>
            <div action="" className="post-container-question-option" onClick={saveUserAnswer}>
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
                        onChange={() => setOptionSelected("optionTwo")
                    }
                    />
                    <label htmlFor="">be a React developer</label>
                </div>
            </div>
            <button className="post-btn">
                <div className="center">
                    <IconContext.Provider value={{size:'2rem', className:'white'}}>
                        <FcUp/>
                    </IconContext.Provider>
                    <span className="marginLeft">Submit</span>
                </div>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveAnswer: () => dispatch(saveAnswer())
    }
}

export default AnswerQuestion
