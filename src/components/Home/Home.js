import React from 'react'
import './Home.scss';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import Message from '../Message/Message';

import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Switch>
                <Navigation/>
                <Message/>
                <Footer/>
            </Switch>
        </div>
    )
}

export default Home
