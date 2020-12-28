import React from 'react';

import { IconContext } from 'react-icons';
import { FcAnswers } from 'react-icons/fc';
import '../../utils/utility.scss';
import './Post.scss';

function Post(props) {
    const {title} = props;
    return (
        <div className="post-container">
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
                <div className="post-container-question-title">Which developer will you become?</div>
                <form action="" className="post-container-question-option">
                    {/* <input type="radio" value="be a Python developer">  */}
                    <input className="input-radio-size" type="radio" id="dewey" name="drone" value="dewey"/>
                    <label htmlFor="">be a Python developer</label>
                    {/* <input type="radio" value="be a React developer">be a React developer */}
                    <input className="input-radio-size" type="radio" id="dewey" name="drone" value="dewey"/>
                    <label htmlFor="">be a React developer</label>
                </form>
            </div>


            <button className="post-btn">
                <div className="center">
                    <IconContext.Provider value={{size:'2rem'}}>
                        <FcAnswers/>
                    </IconContext.Provider>
                    <span className="marginLeft">Submit Answer</span>
                </div>
            </button>
        </div>
    )
}

export default Post
