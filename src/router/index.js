import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/routes/LandingPage'
import Contact from '@/components/routes/Contact'
import About from '@/components/routes/About'
import Portfolio from '@/components/routes/Portfolio'
import Skills from '@/components/routes/Skills'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    
  ]
})
