import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { FcHome } from 'react-icons/fc';
import { FcStatistics } from 'react-icons/fc';
import { FcQuestions } from 'react-icons/fc';

const Navigation = (props) => {
    return (
        <div>
            <div className="navigation-container">
                <Link to='./home'>
                    <div className="logo">
                        <img className="navigation-logo" src="./logo.svg" alt="logo"/>
                    </div>
                </Link>
                <div className="navigation-items">
                    <div className="navigation-center">
                        <FcHome />
                        <span className="marginLeft">Home</span>
                    </div>
                    <div className="navigation-center">
                        <FcStatistics />
                        <span className="marginLeft">Leaderboard</span>
                    </div>
                    <div className="navigation-center">
                        <FcQuestions/>
                        <span className="marginLeft">Ask Question</span>
                    </div>
                    <div className="profile">
                        {/* <img className="profile-image" src="" alt=""/> */}
                        <div className="profile-image"></div>
                        <div className="navigation-name">
                            {}ss
                        </div>
                    </div>
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

