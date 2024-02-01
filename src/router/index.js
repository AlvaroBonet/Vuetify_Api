import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import Posts from '../components/Posts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})

export default router
