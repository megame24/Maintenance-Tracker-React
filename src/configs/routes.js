import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import authPages from '../views/auth';
import routes from '../components/routes';
import requestPages from '../views/request';
import AdminPages from '../views/admin';

const { GuestRoute, UserRoute, AdminRoute } = routes;
const { Signup, Login } = authPages;
const {
  CreateRequest, ViewRequests, UserRequestDetails,
  EditRequest
} = requestPages;
const { Dashboard, AdminRequestDetails, } = AdminPages;

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
  },
  {
    type: GuestRoute,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/users/requests/create',
    component: CreateRequest,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/users/requests/:id/edit',
    component: EditRequest,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/users/requests/all',
    component: ViewRequests,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/users/requests/:id',
    component: UserRequestDetails,
    exact: true,
  },
  {
    type: AdminRoute,
    path: '/admin/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    type: AdminRoute,
    path: '/admin/requests/:id',
    component: AdminRequestDetails,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: Home,
    exact: true,
  },
];
