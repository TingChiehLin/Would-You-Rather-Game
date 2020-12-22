import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
// import LoadingBar from 'react-redux-loading';
import Login from './components/Login/Login';
// import LoadingBar from 'react-redux-loading-bar'

import Home from './components/Home/Home';
import Addquestion from './components/Addquestion/Addquestion';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      {/* <Navigation/> */}
      <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/leaderboard' exact component={Leaderboard}/>
          <Route path='/addquestion' exact component={Addquestion}/>
          <Route path='/:question_id' exact component={Addquestion}/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header> */}