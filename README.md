# Vue Reinit

<p>
  Reinitialize when the browser viewport width changes
</p>


## Install
``` bash
# npm
npm install vue-reinit

# yarn
yarn add vue-reinit
```

## Use with vue
```javascript
import Vue from 'vue'
import App from './App.vue'
import { reinit } from 'vue-reinit'

Vue.config.productionTip = false

// Add vue reiinit
Vue.use(reinit)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```