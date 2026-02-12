import { createRouter, createWebHistory } from 'vue-router'
import Drinks from '@views/Drinks.vue'
import ViewLists from '@views/ViewLists.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Drinks,
    },
    {
      path: '/vue-lists',
      name: '/vue-lists',
      component: ViewLists,
    }
  ],
})

export default router
