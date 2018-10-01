import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('index')
);
