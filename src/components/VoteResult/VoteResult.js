import React from 'react'
import './VoteResult.scss';
import { IconContext } from 'react-icons';
import { FcUpLeft } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

import { connect } from 'react-redux';

function VoteResult(props) {
    const { optionOne, optionTwo} = props.question;
    console.log(optionOne);
    // optionOne: {
    //     votes: ['millajovovich'],
    //     text: 'write JavaScript',
    //   },
    //   optionTwo: {
    //     votes: ['leonardodicaprio'],
    //     text: 'write Swift'
    //   }



    return (
        <div className="voteResult-container">
            <div className="voteResult-title">
                <h1>Vote Result</h1>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>67%</div>
                    <div>2 out of 3 votes</div>
                </div>
                <ProgressBar value={3}/>
                <div className="voteResult-question">{optionOne.text}</div>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>17%</div>
                    <div>1 out of 3 votes</div>
                </div>
                <ProgressBar value={1}/>
                <div className="voteResult-question">{optionTwo.text}</div>
            </div>
            <Link to="/">
                <button className="post-btn" onClick={""}>
                    <div className="center">
                        <IconContext.Provider value={{size:'1.5rem', className:'white'}}>
                            <FcUpLeft/>
                        </IconContext.Provider>
                        <span className="marginLeft">Back to Home</span>
                    </div>
                </button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps)(VoteResult)
