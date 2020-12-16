import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from './logo.svg';
import User from '../../components/User/User';
import { users } from '../../asset/_DATA';

function Login() {

    return (
        <div className="login-page">
            <div className="lognin-container">
                <div className="title">Would You Rather?</div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="user-container">
                {
                    users.map(e => <User key={e.id} name ={e.name} imageUrl={e.imageUrl}/>)
                }
            </div>
            <Link className='login-btn center' to='./'>
                Login
            </Link>
        </div>
    )
}

export default Login

