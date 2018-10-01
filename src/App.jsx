import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './views/Main';

const App = () => (
  <div>
    <Route component={Nav} />
    <Main />
  </div>
);

export default App;
