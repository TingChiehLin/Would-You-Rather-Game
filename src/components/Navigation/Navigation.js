import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { IconContext } from "react-icons";
import { FcHome } from 'react-icons/fc';
import { FcStatistics } from 'react-icons/fc';
import { FcQuestions } from 'react-icons/fc';

import AskQuestion from '../Addquestion/Addquestion';
import Leaderboard from '../Leaderboard/Leaderboard';

const Navigation = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        //Update componenet

    })

    setSelectedTab = () => {
        setSelectedTab([...selectedTab, {

        }])
    }

    return (
        <div>
            <div className="navigation-container">
                <div className="navigation-logo">
                    <Link to='./home'>
                        <div className="logo">
                            <img className="navigation-image" src="./logo.svg" alt="logo"/>
                        </div>
                    </Link>
                </div>
                <div className="navigation-items">
                    <div className="navigation-center" onClick={setSelectedTab}>
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcHome />
                        </IconContext.Provider>
                        <span className="marginLeft">Home</span>
                    </div>
                    <div className="navigation-center">
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcStatistics />
                        </IconContext.Provider>
                        <span className="marginLeft">Leaderboard</span>
                    </div>
                    <div className="navigation-center">
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcQuestions/>
                        </IconContext.Provider>
                        <span className="marginLeft">Ask Question</span>
                    </div>
                </div>
                <div className="profile">
                    {/* <img className="profile-image" src="" alt=""/> */}
                    <img className="profile-image"/>
                    <div className="navigation-name">
                        Emili
                    </div>
                </div>
                {/* <ul>
                    <li>Source Code</li>
                    <li>Log Out</li>
                </ul> */}
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

