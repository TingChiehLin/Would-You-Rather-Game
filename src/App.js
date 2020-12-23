import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
// import LoadingBar from 'react-redux-loading';
import Login from './components/Login/Login';
import LoadingBar from 'react-redux-loading-bar'

import Home from './components/Home/Home';
import Addquestion from './components/Addquestion/Addquestion';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { connect } from 'react-redux';

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

function App() {
  return (
    <React.Fragment>
      <LoadingBar style={{ backgroundColor: '#008ce0', height: '5px' }}/>
      <Router>
        <ScrollToTop />
          <Navigation/>
        <CSSTransition
          classNames="fade"
          timeout={300}
        >
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
        </CSSTransition>
          <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App

// export default connect(
//   (state) => {
//     authedUser: state.avatar.authedUser
//   },
//   {

//   }
// )(App);
