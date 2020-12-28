import React,{ useEffect } from 'react'
import './Home.scss';

import Page from '../Page/Page';
import SwitchQuestion from '../SwitchQuestion/SwitchQuestion';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function Home() {

    return (
        <div className="home-container">
            <SwitchQuestion/>
            <Page/>
        </div>
    )
}

export default Home
