import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail';
import CoachList from './pages/coaches/CoachList';
// import CoachRegistration from './pages/coaches/CoachRegistration';
// import ContactCoach from './pages/requests/ContactCoach';
// import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound';
// import UserAuth from './pages/auth/UserAuth';
import store from './store/index.js';

const CoachDetail = () => import('./pages/coaches/CoachDetail');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration');
const ContactCoach = () => import('./pages/requests/ContactCoach');
const RequestsReceived = () => import('./pages/requests/RequestsReceived');
const UserAuth = () => import('./pages/auth/UserAuth');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // auth guard and check if user logged in
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
