import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from './logo.svg';
import User from '../../components/User/User';

import { connect } from 'react-redux';

// import { _getUsers } from '../../utils/_DATA.js';

function Login() {

    // const res = _getUsers().then(data => console.log(data))
    // const result = Object.keys(res)


    return (
        <div className="login-page">
            <div className="lognin-container">
                <div className="title">Would You Rather?</div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="user-container">
                {
                    // <User avatarName={avatarName} />
                    //result.map(e => <User key={e.id} name ={e.name} avatarURL={e.avatarURL}/>)
                    // users.map(e => <User key={e.id} name ={e.name} avatarURL={e.avatarURL}/>)
                }
            </div>
            <Link className='login-btn center' to='./'>
                Login
            </Link>
        </div>
    )
}

//state from Redux as input
const mapStateToProps = state => {
    return {
        avatarName: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateQuestions: () => dispatch({type: 'CREATE_QUESTIONs'})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

