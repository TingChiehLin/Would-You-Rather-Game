import React,{ useEffect } from 'react'
import './Home.scss';

import AskQuestion from '../Addquestion/Addquestion';
import Page from '../Page/Page';
import Leaderboard from '../Leaderboard/Leaderboard';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function Home() {

    return (
        <div>
            <Page/>
            <AskQuestion/>
            <Leaderboard/>
        </div>
    )
}

export default Home
