// var React = require('react');
// var ReactDOM = require('react-dom');
// var MyButtonController = require('./components/MyButtonController');
// var LoginPage = require('./components/authentication/Login');

// ReactDOM.render(
//   <LoginPage/>,
//   document.getElementById('app')
// );
import React from 'react';
import { render } from 'react-dom';
//import App from './components/App';
import Routes from './routes';

render(
      <Routes/>,
  document.getElementById('app')
);
