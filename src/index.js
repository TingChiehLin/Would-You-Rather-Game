import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Addquestion from './components/Addquestion/Addquestion';
import Leaderboard from './components/Leaderboard/Leaderboard';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';

import reportWebVitals from './reportWebVitals';

// import reducer from './store/reducer';
import loginReducer from './store/reducers/login';
import homeReducer from './store/reducers/home';

const rootReducer = combineReducers({
  avatar: loginReducer,
  infor: homeReducer
});

//Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

//configure Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//applyMiddleware => connect to store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/login' exact component={App}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/leaderboard' exact component={Leaderboard}/>
          <Route path='/addquestion' exact component={Addquestion}/>
          <Route path='/:question_id' exact component={Addquestion}/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
