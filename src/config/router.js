import Home from '../spa/Home';
import Login from '../spa/login/Login';
import Dashboard from '../spa/dashboard/Dashboard';
import GenericDashboard from '../spa/dashboard/GenericDashboard';
import EventCreate from '../spa/event/EventCreate';
import EventMakeSchedule from '../spa/event/EventMakeSchedule';
import List from '../spa/products/List';
import NotFound from '../spa/NotFound';
/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/start',
    children: [
      {
        path: 'produtos',
        name: 'produtos',
        component: List,
      },
      {
        path: 'products/:id',
        // component: Hello,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
   
  },
   {
    path: '/start',
    component: GenericDashboard,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
   {
    path: '/eventcreate',
    component: EventCreate,
  },
   {
    path: '/eventmakeschedule',
    component: EventMakeSchedule,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true,
};

export default VueRouter => new VueRouter(VueRouterObject);
