import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import reducer from './store/reducer';
import loginReducer from './store/reducers/login';
import homeReducer from './store/reducers/home';

const rootReducer = combineReducers({
  avatar: loginReducer,
  infor: homeReducer
});

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
