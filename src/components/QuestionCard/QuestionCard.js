import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './QuestionCard.scss';

import { connect } from 'react-redux';

function QuestionCard(props) {
    const { id, timestamp, author } = props.question;
    const {userInfo} = props;
    const userDetails = userInfo[id];
    const date = new Date(timestamp)

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
            <div className="post-container-question-title">Which developer will you become?</div>
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
        useInfo: state.users.result,
        authedUser: state.users.authedUser,
    };
};

export default connect(mapStateToProps)(QuestionCard);

