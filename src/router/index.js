import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

import SearchResults from '../views/SearchResults.vue';
import SearchPage from '../views/SearchPage.vue';


const routes = [
  { 
    path: '/', 
    component: SearchPage
  },
  {
    path: '/results',
    name: 'results',
    component: SearchResults,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
