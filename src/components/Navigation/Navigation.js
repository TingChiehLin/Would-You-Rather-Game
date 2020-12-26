import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { IconContext } from "react-icons";
import { FcHome } from 'react-icons/fc';
import { FcStatistics } from 'react-icons/fc';
import { FcQuestions } from 'react-icons/fc';

import AskQuestion from '../Addquestion/Addquestion';
import Leaderboard from '../Leaderboard/Leaderboard';

import { login_result } from '../../store/action/index';
import { connect } from 'react-redux';

const Navigation = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        //Update componenet

    })

    const setCurrentTab = () => {
        // setSelectedTab([...selectedTab, {
            
        // }])
    }

    return (
        <div>
            <div className="navigation-container">
                    <Link to='./' className="navigation-logo">
                        <div className="logo">
                            <img className="navigation-image" src="./logo.svg" alt="logo"/>
                        </div>
                    </Link>
                <div className="navigation-items">
                    <Link to={`/home`} className="navigation-center" onClick={setCurrentTab}>
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcHome />
                        </IconContext.Provider>
                        <span className="marginLeft">Home</span>
                    </Link>
                    <Link to={`/leaderboard`} className="navigation-center" >
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcStatistics />
                        </IconContext.Provider>
                        <span className="marginLeft">Leaderboard</span>
                    </Link>
                    <Link to={`/addquestion`} className="navigation-center" >
                        <IconContext.Provider value={{size:'1.3rem'}}>
                            <FcQuestions/>
                        </IconContext.Provider>
                        <span className="marginLeft">Ask Question</span>
                    </Link>
                </div>
                <div className="profile">
                    {/* <img className="profile-image" src="" alt=""/> */}
                    <img className="profile-image" src="`${}`"/>
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

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(login_result()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


