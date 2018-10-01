import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import authPages from '../views/auth';
import routes from '../components/routes';

const { GuestRoute } = routes;
const { Signup } = authPages;

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
  },
  {
    type: GuestRoute,
    path: '/signup',
    component: Signup,
    exact: true,
  }
];
