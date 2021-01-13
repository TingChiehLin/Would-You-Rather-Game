import React from 'react'
import './VoteResult.scss';
import { IconContext } from 'react-icons';
import { FcUpLeft } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

import { connect } from 'react-redux';

function VoteResult(props) {

    

    return (
        <div className="voteResult-container">
            <div className="voteResult-title">
                <div>

                </div>
                <h1>Vote Result</h1>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>67%</div>
                    <div>2 out of 3 votes</div>
                </div>
                <ProgressBar value={3}/>
                <div className="voteResult-question">be a Python developer</div>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>17%</div>
                    <div>1 out of 3 votes</div>
                </div>
                <ProgressBar value={1}/>
                <div className="voteResult-question">be a React developer</div>
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
        questions: state.questions.question
    }
}

export default connect(mapStateToProps)(VoteResult)
