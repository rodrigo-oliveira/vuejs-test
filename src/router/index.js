import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users';
import Albums from '@/components/Albums';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Albums',
      component: Albums,
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
