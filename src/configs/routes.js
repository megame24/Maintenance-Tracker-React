import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

export default [
  {
    type: Route,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: '/about',
    component: About,
    exact: true,
  }
];
