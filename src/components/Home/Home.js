import React from 'react'
import './Home.scss';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import AskQuestion from '../Addquestion/Addquestion';
import Message from '../Message/Message';
import Leaderboard from '../Leaderboard/Leaderboard';
import Switchquestion from '../Switchquestion/Switchquestion';

import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navigation/>
            <Switchquestion/>
            <AskQuestion/>
            <Message/>
            <Leaderboard/>
            <Footer/>
        </div>
    )
}

export default Home
