import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import store from './store'
import axios from 'axios'

import '@/assets/js/fullscreen.js'
import '@/assets/js/back.js'

import '@/common/base/ant.js'
import 'lib-flexible'

import '@/common/base/filter.js'
import './components/Image/index.js'

import { getLocalStorage } from '@/utils/auth.js'

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


window.document.documentElement.setAttribute('data-theme', getLocalStorage('theme'));


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

