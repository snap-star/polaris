import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AnimePosts from '../views/AnimePosts.vue';
import UserDashboard from '../components/Dashboard.vue';
import UserLogin from '../components/Login.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/anime', component: AnimePosts },
  { path: '/dashboard', component: UserDashboard },
  { path: '/login', component: UserLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
