import React from 'react'
import {useLocation} from 'react-router-dom';

function NoMatch() {

    const { pathname } = useLocation();

    return (
        <div className="nomatch-container">
            <h3>No match for <code>{pathname}</code></h3>
        </div>
    )
}

export default NoMatch
