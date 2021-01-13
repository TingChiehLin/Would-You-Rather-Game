import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import "../../utils/utility.scss";
import User from "../../components/User/User";
//import * as actionType from '../../store/action/actions';
//Action Creator
import { user_result, set_userstate } from "../../store/action";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    userID: "",
  };

  componentDidMount() {
    this.props.onLoginResult();
  }

  onChangeUserState = (userID) => {
    if (userID) {
      this.setState({ userID: userID });
    }
  };

  onLogin = (e) => {
    if (this.state.userID === "") {
      e.preventDefault();
      alert("Please Select a user");
      return;
    } else {
      this.setState({
        authedUser: this.state.userID,
      });
      this.props.Update_userstate(this.state.userID);
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="lognin-container">
          <div className="title">Would You Rather?</div>
          <img src="/logo.svg" className="App-logo" alt="logo" />
        </div>
        <div className="user-container">
          {Object.values(this.props.userInfo).map((e) => (
            <User
              key={e.id}
              id={e.id}
              isSelected={this.state.userID === e.id}
              avatarName={e.name}
              avatarURL={e.avatarURL}
              avatarClick={this.onChangeUserState}
            />
          ))}
        </div>
        <Link
          className="login-btn marginCenter"
          to=""
          style={{ marginBottom: "2rem" }}
          onClick={this.onLogin}
        >
          Login
        </Link>
      </div>
    );
  }
}

//state from Redux as input
const mapStateToProps = (state) => {
  return {
    userInfo: state.users.result,
    authedUser: state.users.authedUser,
    //ava for component's property name
    //storedResult: state.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Action

    // onCreateQuestions: () => dispatch({type: 'CREATE_QUESTIONS'}),
    // onADD_LIKE: () => dispatch({type: 'ADD_LIKE', like:10}),
    // onStoredResult: () => dispatch({type: "STORE_RESULT"})
    // onLoginResult: ()=> dispatch({type: actionType.LOGIN_RESULT}),

    //Action Creator
    onLoginResult: () => dispatch(user_result()),
    Update_userstate: (userID) => dispatch(set_userstate(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
