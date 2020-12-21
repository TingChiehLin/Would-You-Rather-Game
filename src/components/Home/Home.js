import React from 'react'
import './Home.scss';

import Navigation from '../Navigation/Navigation';
import Message from '../Message/Message';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <Navigation/>
            <Message/>
            <Footer/>
        </div>
    )
}

export default Home
