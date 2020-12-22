import React from 'react'
import './User.scss';
import '../../utils/utility';

function User(props) {
    const {id, isSelected, avatarName, avatarURL, avatarClick} = props;
    // id: 'millajovovich',
    // id: 'leonardodicaprio',
    // id: 'emmawatson',
    const avatarActive = "avatarActive";
    let userProfile = "user-profile";

    if(isSelected) {
         userProfile += ` ${avatarActive}`;
    }

    return(
        <a className={`${userProfile}`} onClick={
            () => {
                avatarClick(id);
                
            }
            }>

            <div className="overlay"></div>
            <img className="user-profile-image" src={avatarURL} alt={`${avatarName}`}/>
            <div className="user-profile-name">{avatarName}</div>
        </a>
    )
}

export default User

