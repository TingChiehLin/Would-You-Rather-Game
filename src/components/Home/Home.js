import React from 'react'
import './Home.scss';

import AskQuestion from '../Addquestion/Addquestion';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';

import Leaderboard from '../Leaderboard/Leaderboard';

import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navigation/>
            <AskQuestion/>
            <Message/>
            <Leaderboard/>
            <Footer/>
        </div>
    )
}

export default Home
