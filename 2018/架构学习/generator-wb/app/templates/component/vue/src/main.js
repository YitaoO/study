import Vue from 'vue'
import App from './demo.vue'
import ElDialog from './lib/index'
Vue.use(ElDialog);

new Vue({
  el: '#app',
  render: h => h(App)
})