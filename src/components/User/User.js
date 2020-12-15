import React from 'react'
import './User.scss';

function User(props) {
    const {name, imageUrl} = props;
    return(
        <div className="user-container">
            <img src="" alt="${name}"/>
            <div>{name}</div>
        </div>
    )
}

export default User

