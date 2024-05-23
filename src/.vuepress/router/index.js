import { createRouter, createWebHistory } from 'vue-router';
import AnimeSearch from '../views/AnimeSearch.vue';

const routes = [
  {
    path: '/',
    name: 'AnimeSearch',
    component: AnimeSearch,
  },
  // tambahkan rute lain jika diperlukan
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
