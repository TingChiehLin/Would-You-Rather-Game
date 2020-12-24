import React, { useState, useEffect} from 'react';

import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import './Post.scss';

function Post(props) {

    return (
        <div className="post-container">
            <div className="post-container-intro">
                <div>Leonardo DiCaprio</div>
                <img 
                    src=""
                    alt=""
                    className="post-profile-image"
            />
            </div>

            <div className="post-container-question">

            </div>

            <button className="post-btn">
                <div className="center">
                    <IconContext.Provider value={{size:'2rem'}}>
                        <FcAnswers/>
                    </IconContext.Provider>
                    <span className="marginLeft">Answer</span>
                </div>
            </button>
        </div>
    )
}

export default Post
