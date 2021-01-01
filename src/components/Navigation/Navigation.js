import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import { IconContext } from "react-icons";
import { FcHome } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";
import { VscSignOut } from "react-icons/vsc";

import { user_result } from "../../store/action";
import { connect } from "react-redux";

const Navigation = (props) => {
  const { userInfo, authedUser } = props;
  const userDetails = userInfo[authedUser];

  return (
    <div>
      <div className="navigation-container">
        <Link to="./" className="navigation-logo">
          <div className="logo">
            <img className="navigation-image" src="./logo.svg" alt="logo" />
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
            <li>
              <a href="https://github.com/TingChiehLin/would-you-rather-game">
                Source Code
              </a>
            </li>
            <li onClick={() => {}}>Log Out</li>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
