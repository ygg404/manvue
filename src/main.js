import Vue from 'vue'
import App from '@/App'
import router from '@/router'                 // api: https://github.com/vuejs/vue-router
import store from '@/store'                   // api: https://github.com/vuejs/vuex
import VueCookie from 'vue-cookie'            // api: https://github.com/alfhen/vue-cookie
import '@/element-ui'                         // api: https://github.com/ElemeFE/element
import '@/icons'                              // api: http://www.iconfont.cn/
import '@/element-ui-theme'
import '@/assets/scss/index.scss'
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import {isAuth, getUUID,stringIsNull} from '@/utils'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Meta from 'vue-meta'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VueHighlightJS)
Vue.use(Meta)
Vue.use(VueCookie)
Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.isAuth = isAuth     // 权限方法
Vue.prototype.stringIsNull = stringIsNull // 判断字符串为空

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
