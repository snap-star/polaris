import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import AnimePosts from '../views/AnimePosts.vue';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/anime', component: AnimePosts },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;