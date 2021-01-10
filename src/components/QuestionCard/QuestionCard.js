import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './QuestionCard.scss';

import { connect } from 'react-redux';

function QuestionCard(props) {
    console.log(props);
    const { id, timestamp, author, optionOne } = props.question;
    const userDetails = props.userInfo[author];
    // const date = new Date(timestamp)
    // <img className="profile-image" src={`${userDetails.avatarURL}`} />
    return (
        <div className="post-container" >
            <div className="post-container-intro">
                <div className="post-container-intro-name">Leonardo DiCaprio</div>
                <img 
                    src={`${userDetails.avatarURL}`}
                    alt={`${userDetails.avatarURL}`}
                    className="post-profile-image"
            />
            </div>

            <div className="post-container-question">
                <h3>Would you rather?</h3>
                <div className="post-container-question-time">
                    {/* <div>{date}</div> */}
                    <div>{}</div>
                </div>
            <div className="post-container-question-title">{`${optionOne.text.substring(0,20)} ?`}</div>
            </div>

            <Link to={`/questions/${id}`}> 
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

const mapStateToProps = (state) => {
    return {
        userInfo: state.users.result,
        authedUser: state.users.authedUser,
    };
};

export default connect(mapStateToProps)(QuestionCard);



    // export const saveQuestion = ({author, optionOneText, optionTwoText}) => {
    //     return async dispatch => {
    //         const questions = await _saveQuestion({author, optionOneText, optionTwoText});
    //         dispatch(getQuestion_result(questions))
    //         dispatch(user_result())
    //     }
    // }
    
    // export const saveAnswer = ({author, qid, answer}) => {