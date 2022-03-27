import Vue from 'vue'
import Router from 'vue-router'
import bill from '@/components/bill'
import statistics from '@/components/statistics'
import instal from '@/components/instal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/bill'
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/instal',
      name: 'instal',
      component: instal
    }
  ]
})
