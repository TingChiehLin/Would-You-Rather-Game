import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import { IconContext } from "react-icons";
import { FcHome } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";
import { VscSignOut } from "react-icons/vsc";

import SwitchDarkLight from '../SwitchDarkLight/SwitchDarkLight';

import { user_result, set_userstate } from "../../store/action";
import { connect } from "react-redux";

const Navigation = (props) => {
  const { userInfo, authedUser } = props;
  const userDetails = userInfo[authedUser];
  const [UserID, setUserID] = useState('')

  const LogOut = () => {
      setUserID('');
      props.Update_userstate(UserID);
  }

  return (
    <div>
      <div className="navigation-container">
        <Link to="/" className="navigation-logo">
          <div className="logo">
            <img className="navigation-image" src="/logo.svg" alt="logo" />
          </div>
        </Link>
        <div className="navigation-items">
          <Link to={`/`} className="navigation-center">
            <IconContext.Provider value={{ size: "1.3rem" }}>
              <FcHome />
            </IconContext.Provider>
            <span className="marginLeft">Home</span>
          </Link>
          <Link to={`/leaderboard`} className="navigation-center">
            <IconContext.Provider value={{ size: "1.3rem" }}>
              <FcStatistics />
            </IconContext.Provider>
            <span className="marginLeft">Leaderboard</span>
          </Link>
          <Link to={`/addquestion`} className="navigation-center">
            <IconContext.Provider value={{ size: "1.3rem" }}>
              <FcQuestions />
            </IconContext.Provider>
            <span className="marginLeft">Ask Question</span>
          </Link>
        </div>
        <div className="profile">
          <img className="profile-image" src={`${userDetails.avatarURL}`} />
          <div className="navigation-name">{userDetails.name}</div>
          <ul className="profile-dropdown-menu">
            <li className="center">
              <a
                target="_blank"
                className="black"
                href="https://github.com/TingChiehLin/would-you-rather-game"
              >
                Source Code
              </a>
            </li>
            <Link to="">
              <li className="center" onClick={LogOut}>
                  Log Out
              </li>
            </Link>
            {/* <li className="center">
              <SwitchDarkLight/>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.result,
    authedUser: state.users.authedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(user_result()),
    Update_userstate: (userID) => dispatch(set_userstate(userID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
