import Vue from 'vue'
import Router from 'vue-router'
import * as man from './modules/man'
import * as h5 from './modules/h5'

Vue.use(Router)

export default new Router({
  routes: h5.getRouterList()
  // {
  //   path: '/hello',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }

})
