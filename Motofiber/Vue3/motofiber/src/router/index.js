import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import FAQ from '../views/FAQ.vue'
import i18n from '../i18n'

//Motors
import Suzuki from '../views/motors/suzuki.vue'
import Kawasaki from '../views/motors/kawasaki.vue'
import Aprilia from '../views/motors/aprilia.vue'
import BMW from '../views/motors/bmw.vue'
import Carbon from '../views/motors/carbon.vue'
import Ducati from '../views/motors/ducati.vue'
import Honda from '../views/motors/honda.vue'
import Yamaha from '../views/motors/yamaha.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view')}
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'aprilia',
        name: 'Aprilia',
        component: Aprilia
      },
      {
        path: 'bmw',
        name: 'BMW',
        component: BMW
      },
      {
        path: 'carbon',
        name: 'Carbon',
        component: Carbon
      },
      {
        path: 'ducati',
        name: 'Ducati',
        component: Ducati
      },
      {
        path: 'honda',
        name: 'Honda',
        component: Honda
      },
      {
        path: 'yamaha',
        name: 'Yamaha',
        component: Yamaha
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contacts
      },
      {
        path: 'kawasaki',
        name: 'Kawasaki',
        component: Kawasaki
      },
      {
        path: 'Suzuki',
        name: 'Suzuki',
        component: Suzuki
      },
      {
        path: 'FAQ',
        name: 'FAQ',
        component: FAQ
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
