import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from './logo.svg';
import User from '../../components/User/User';
//import * as actionType from '../../store/action/actions';
//Action Creator
import { login_result } from '../../store/action/index';
import { connect } from 'react-redux';

// import { _getUsers } from '../../utils/_DATA.js';

class Login extends Component {

    state = {
        isSelected: false
    }

    componentDidMount() {
         this.props.onLoginResult();
    }

    onChangeUserState() {
        this.setState( {isSelected: !this.state.isSelected} );
        console.log(this.state.isSelected);
    }

    render() {
        return (
            <div className="login-page">
                <div className="lognin-container">
                    <div className="title">Would You Rather?</div>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="user-container">
                    {
                        Object.values(this.props.userInfo).map((e) => <User key={e.id} avatarName={e.name} avatarURL={e.avatarURL} avatarClick={this.onChangeUserState}/>)
                    }
                </div>
                <Link className='login-btn center' to='./' >
                    Login
                </Link>
            </div>
        )
    }
}

//state from Redux as input
const mapStateToProps = state => {
    return {
        ava: state.avatar.testName ,
        userInfo: state.avatar.result
        //ava for component's property name
        //storedResult: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //Action
        // onCreateQuestions: () => dispatch({type: 'CREATE_QUESTIONS'}),
        // onADD_LIKE: () => dispatch({type: 'ADD_LIKE', like:10}),
        // onStoredResult: () => dispatch({type: "STORE_RESULT"})
        // onLoginResult: ()=> dispatch({type: actionType.LOGIN_RESULT}),

        //Action Creator
        onLoginResult: ()=> dispatch(login_result()),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

