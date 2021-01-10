import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './QuestionCard.scss';

import { connect } from 'react-redux';

function QuestionCard(props) {
    const {id, author} = props.question;

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
                    <div>time{}</div>
                </div>
            <div className="post-container-question-title">Which developer will you become?</div>
            </div>

            <Link to={`/questions/${id}`}> 
                <button className="post-btn">
                    <div className="center">
                        <IconContext.Provider value={{size:'2rem', className:'white'}}>
                            <FcAnswers/>
                        </IconContext.Provider>
                        <span className="marginLeft">Answer</span>
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default QuestionCard

