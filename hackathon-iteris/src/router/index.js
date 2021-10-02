import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Jogos from '../views/jogos.vue'
import Animes from '../views/animes.vue'
import SetembroAmarelo from '../views/setembro-amarelo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/jogos',
    name: 'jogos',
    component: Jogos
  },
  {
    path: '/animes',
    name: 'animes',
    component: Animes
  },
  {
    path: '/setembro-amarelo',
    name: 'setembro-amarelo',
    component: SetembroAmarelo
  },
]
const router = new VueRouter({
  routes
})

export default router
