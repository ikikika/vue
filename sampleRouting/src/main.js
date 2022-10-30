import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      //   alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      //   beforeEnter(_to, _from, next) {
      // guard can be defined here
      //   },
    },
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   props: true,
    // },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    // to - going to
    // from - coming from
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  } else {
    next();
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
