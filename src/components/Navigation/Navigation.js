import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { AiOutlineHome } from 'react-icons/AiOutlineHome';
import { GrScorecard } from 'react-icons/GrScorecard';
import { BsQuestionSquare } from 'react-icons/BsQuestionSquare';

const Navigation = (props) => {
    return (
        <div>
            <div className="navigation-container">
                <div className="logo">

                </div>
                <div className="navigation-items">
                    <div>
                        <AiOutlineHome />
                        <span>Home</span>
                    </div>
                    <div>
                        Leaderboard
                    </div>
                    <div>
                        Ask Question
                    </div>
                </div>
                <div className="profile">

                </div>
            </div>
        </div>
    )
}

export default Navigation

{/* <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider> */}

