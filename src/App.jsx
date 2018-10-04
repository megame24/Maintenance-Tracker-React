import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './views/Main';
import Footer from './components/Footer';

const App = () => (
  <div id="react-container">
    <Route component={Nav} />
    <Main id="react-body" />
    <Footer />
  </div>
);

export default App;
