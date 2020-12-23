import React,{ useEffect } from 'react'
import './Home.scss';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import AskQuestion from '../Addquestion/Addquestion';
import Page from '../Page/Page';
import Leaderboard from '../Leaderboard/Leaderboard';

import { Switch, Route } from 'react-router-dom';

function Home() {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            <Page/>
            <AskQuestion/>
            <Leaderboard/>
        </div>
    )
}

export default Home
