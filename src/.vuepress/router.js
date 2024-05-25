// .vuepress/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) next('/login');
  else next();
});

export default router;