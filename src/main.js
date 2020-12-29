import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import store from './store'
import axios from 'axios'

import '@/common/base/ant.js'
import 'lib-flexible'

import './components/Image/index.js'

Vue.use(VueCompositionApi);

Vue.config.productionTip = false
Vue.prototype.$axios = axios



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
