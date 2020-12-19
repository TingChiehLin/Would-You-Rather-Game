import React from 'react'
import './User.scss';
import '../../utils/utility';

function User(props) {
    const {avatarName, avatarURL, avatarClick} = props;

    return(
        <div className="user-profile" onClick={()=> {avatarClick()}}>
            <div className="overlay"></div>
            <img className="user-profile-image" src={avatarURL} alt={`${avatarName}`}/>
            <div className="user-profile-name">{avatarName}</div>
        </div>
    )
}

export default User

