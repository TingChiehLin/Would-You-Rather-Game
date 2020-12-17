import React from 'react'
import './User.scss';

function User(props) {
    const {avatarName, avatarURL} = props;

    return(
        <div className="user-profile" onClick={()=> {console.log("ss")}}>
            <img className="user-profile-image" src={avatarURL} alt={`${avatarName}`}/>
            <div className="user-profile-name">{avatarName}</div>
        </div>
    )
}

export default User

