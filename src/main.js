// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import swiper from './components/swiper.vue'
import watchUse from './components/watchUse.vue'

Vue.config.productionTip = false

Vue.component('swiper',swiper)
Vue.component('watchUse',watchUse)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
