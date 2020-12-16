import React from 'react'
import './User.scss';

function User(props) {
    const {name, avatarURL} = props;

    return(
        <div className="user-profile" onClick={()=> {console.log("ss")}}>
            <img className="user-profile-image" src={avatarURL} alt={`${name}`}/>
            <div className="user-profile-name">{name}</div>
        </div>
    )
}

export default User

