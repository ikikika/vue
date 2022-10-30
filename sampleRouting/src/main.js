import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      component: TeamsList,
      //   alias: '/',
    },
    {
      path: '/users',
      component: UsersList,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true,
    },
    {
      path: '/:notfound(.*)',
      redirect: '/',
    },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
