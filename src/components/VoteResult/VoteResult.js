import React from 'react'
import './VoteResult.scss';
import { IconContext } from 'react-icons';
import { FcUpLeft } from 'react-icons/fc';

import ProgressBar from '../ProgressBar/ProgressBar';

function VoteResult(props) {

    return (
        <div className="voteResult-container">
            <ProgressBar/>
            <ProgressBar/>
            <button className="post-btn" onClick={""}>
                <div className="center">
                    <IconContext.Provider value={{size:'1.5rem', className:'white'}}>
                        <FcUpLeft/>
                    </IconContext.Provider>
                    <span className="marginLeft">Back</span>
                </div>
            </button>
        </div>
    )
}

export default VoteResult
