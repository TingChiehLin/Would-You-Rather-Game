import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './QuestionCard.scss';

import { connect } from 'react-redux';

import {saveAnswer} from '../../store/action/question';

function QuestionCard(props) {
    const {id, author} = props.question;
    const [optionSelected, setOptionSelected] = useState('optionOne');
    const saveUserAnswer = () => {
        saveAnswer({qid: id, author, answer: optionSelected})
    }

    return (
        <div className="post-container" >
            <div className="post-container-intro">
                <div className="post-container-intro-name">Leonardo DiCaprio</div>
                <img 
                    src=""
                    alt=""
                    className="post-profile-image"
            />
            </div>

            <div className="post-container-question">
                <h3>Would you rather?</h3>
                <div className="post-container-question-time">
                    <div>time</div>
                </div>
            <div className="post-container-question-title">Which developer will you become?</div>
            
            <div action="" className="post-container-question-option" onClick={saveUserAnswer   }>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" value="optionOne"
                        checked={optionSelected==="optionOne"}
                        onClick={() => setOptionSelected("optionOne")}
                    />
                    <label htmlFor="">be a Python developer</label>
                </div>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" name="drone" value="optionTwo"
                        checked={optionSelected==="optionTwo"}
                        onClick={() => setOptionSelected("optionTwo")}
                    />
                    <label htmlFor="">be a React developer</label>
                </div>
            </div>
            </div>
            <Link to={`${id}`}>
            <button className="post-btn">
                <div className="center">
                    <IconContext.Provider value={{size:'2rem'}}>
                        <FcAnswers/>
                    </IconContext.Provider>
                    <span className="marginLeft">Answer</span>
                </div>
            </button>
            </Link>
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


export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard)

