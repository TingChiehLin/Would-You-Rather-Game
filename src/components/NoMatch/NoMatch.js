import React from 'react'
import './NoMatch.scss';
import {useLocation} from 'react-router-dom';

function NoMatch() {

    const { pathname } = useLocation();

    return (
        <div className="nomatch-container">
            <div className="nomatch-container-intro">
                <h1>No match for <code>{pathname}</code></h1>
                <p>Please type correct path.</p>
            </div>
        </div>
    )
}

export default NoMatch
