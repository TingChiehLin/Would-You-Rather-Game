import React from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './QuestionCard.scss';

import { connect } from 'react-redux';

function QuestionCard(props) {
    const { id, timestamp, author, optionOne } = props.question;
    const userDetails = props.userInfo[author];
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat(
        'en-AU', { 
        year: 'numeric', 
        month: 'numeric',
        day: 'numeric', 
        timeZone: 'UTC' 
    });
    // .toLocaleString();
    const formatterData = formatter.formatToParts(date);
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
                    {
                        formatterData.map(({value}, index) => {
                           return <span className="date-margin-right" key={index}>{value}</span>
                        })
                    }
                </div>
                <div className="post-container-question-title">{`... ${optionOne.text.substring(0,20)} ?`}</div>

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
