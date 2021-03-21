import Vue from 'vue'
import App from './App.vue'
import { reinit } from '../lib'

Vue.config.productionTip = false

Vue.use(reinit)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
