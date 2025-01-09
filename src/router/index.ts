import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/Blog.vue'
import DashboardView from '../views/Dashboard.vue'
import FaqView from '../views/Faq.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: { index: '1' },
    },
    {
      path: '/blog',
      name: 'blog',
      redirect: '/blog/list',
      children: [
        {
          path: 'list',
          name: 'blog list',
          component: BlogView,
          meta: { index: '2' },
        },
      ],

    },
    {
      path: '/faq',
      name: 'faq',
      redirect: 'faq/list',
      children: [
        {
          path: 'list',
          name: 'faq list',
          component: FaqView,
          meta: { index: '3' },
        },
      ],

    },
  ],
})

export default router
