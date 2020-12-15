import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from './logo.svg';
import User from '../../components/User/User';

function Login() {

    const users = [
        {
            id:0,
            name: "Denzel Washington",
            imageUrl: ""  
        }, {
            id:1,
            name: "Leonardo DiCaprio",
            imageUrl: "" 
        }, {
            id:2,
            name: "Milla Jovovich",
            imageUrl: "" 
        }, {
            id:3,
            name: "Emma Watson",
            imageUrl: "" 
        }
    ]

    return (
        <div className="login-page">
            <div className="lognin-container">
                <div className="title">Would You Rather?</div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="user-container">
                {
                    users.map(e => <User key={e.id} name ={e.name}/>)
                }
            </div>
            <Link to="./">
                <div className="login-btn center">Login</div>
            </Link>
        </div>
    )
}

export default Login

