import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Nav from '@/components/nav'
import Listen from '@/components/listen'
import Music from '@/components/music'
import Find from '@/components/find'
import Mine from '@/components/mine'
import Set from '@/components/set'
import Classify from '@/components/classify'
import Fine from '@/components/fine'
import Live from '@/components/live'
import Login from '@/components/login'
import Broadcast from '@/components/broadcast'
import Contact from '../components/contact'



Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"is-Active",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/listen',
      name: 'listen',
      component: Listen
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/set',
      name: 'set',
      component: Set
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/fine',
      name: 'fine',
      component: Fine
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
 
