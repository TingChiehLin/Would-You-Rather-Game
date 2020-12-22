import React from 'react'
import './Home.scss';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import AskQuestion from '../Addquestion/Addquestion';
import Post from '../Post/Post';
import Leaderboard from '../Leaderboard/Leaderboard';
import Switchquestion from '../Switchquestion/Switchquestion';

import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navigation/>
            <Switchquestion/>
            <AskQuestion/>
            <Post/>
            <Leaderboard/>
            <Footer/>
        </div>
    )
}

export default Home
