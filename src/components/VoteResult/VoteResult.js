import React from 'react'
import './VoteResult.scss';
import { IconContext } from 'react-icons';
import { FcUpLeft } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function VoteResult(props) {
    const { question_id } = useParams();
    const { optionOne, optionTwo} = props.question[question_id];

    const totalNumberOfOption1Vote = optionOne.votes.length;
    const totalNumberOfOption2Vote = optionTwo.votes.length;
    const totalVoteNumber = totalNumberOfOption1Vote + totalNumberOfOption2Vote;
    const totalPercent1 = Math.floor(totalNumberOfOption1Vote / totalVoteNumber * 100);
    const totalPercent2 = Math.floor(totalNumberOfOption2Vote / totalVoteNumber * 100);

    return (
        <div className="voteResult-container">
            <div className="voteResult-title">
                <h1>Vote Result</h1>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>{`${totalPercent1} %`}</div>
                    <div>{totalNumberOfOption1Vote} out of {totalVoteNumber} votes</div>
                </div>
                <ProgressBar value={totalPercent1}/>
                <div className="voteResult-question">{optionOne.text}</div>
            </div>
            <div className="voteResult-value">
                <div className="voteResult-percent">
                    <div>{`${totalPercent2} %`}</div>
                    <div>{totalNumberOfOption2Vote} out of {totalVoteNumber} votes</div>
                </div>
                <ProgressBar value={totalPercent2}/>
                <div className="voteResult-question">{optionTwo.text}</div>
            </div>
            <Link to="/">
                <button className="post-btn">
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
