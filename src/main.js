import Vue from 'vue'
import router from './router'
// import store from './store'
import store from './components/store/index'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App)
  router,
  store,
  // storeAAndB
}).$mount('#app')
