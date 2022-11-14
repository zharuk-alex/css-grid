import { createRouter, createWebHistory } from 'vue-router'
const webHistoryPath = import.meta.env.BASE_URL // if will deploy to github:pages


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/HomeView.vue'),
    alias: '/home',
  },
  {
    path: "/lesson/:id",
    name: "lesson:single",
    component: () => import('../views/SingleView.vue'),
  },
  {
    path: "/template/:id",
    name: "template:single",
    component: () => import('../views/SingleView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(webHistoryPath),
  routes,
})

export default router