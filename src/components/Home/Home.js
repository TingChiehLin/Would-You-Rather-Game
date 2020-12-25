import React,{ useEffect } from 'react'
import './Home.scss';

import Page from '../Page/Page';
import Switchquestion from '../Switchquestion/Switchquestion';


import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function Home() {

    return (
        <div className="home-container">
            <Switchquestion/>
            <Page/>

        </div>
    )
}

export default Home
