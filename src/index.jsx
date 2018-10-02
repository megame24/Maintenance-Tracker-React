import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import App from './App';
import store from './store';
import '../public/styles/styles.css';
import types from './actions/actionTypes';


const token = localStorage.getItem('token');
if (token && token !== 'undefined') {
  const decoded = decode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (currentTime < decoded.exp) {
    const user = {
      id: decoded.id,
      fullname: decoded.fullname,
      username: decoded.username,
      role: decoded.role,
    };
    store.dispatch({ type: types.PERSIST_LOGIN, payload: { user, token } });
  }
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('index')
);
