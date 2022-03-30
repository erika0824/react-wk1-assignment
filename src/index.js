import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Navigation from './components/navigation'
import './index.css';
import reportWebVitals from './reportWebVitals';

const login = React.createElement(Login, {}, null);
const navigation = React.createElement(Navigation, {}, null);
ReactDOM.render(
  [navigation, login],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
