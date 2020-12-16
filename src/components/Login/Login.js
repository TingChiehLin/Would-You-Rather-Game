import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from './logo.svg';
import User from '../../components/User/User';
// import { users } from '../../asset/_DATA';

import { _getUsers } from '../../utils/_DATA.js';

function Login() {
    const users = []
    const res = _getUsers().then(data => console.log(data))
    const result = Object.keys(res)

    return (
        <div className="login-page">
            <div className="lognin-container">
                <div className="title">Would You Rather?</div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="user-container">
                {
                    result.map(e => <User key={e.id} name ={e.name} avatarURL={e.avatarURL}/>)
                    // users.map(e => <User key={e.id} name ={e.name} avatarURL={e.avatarURL}/>)
                }
            </div>
            <Link className='login-btn center' to='./'>
                Login
            </Link>
        </div>
    )
}

export default Login

