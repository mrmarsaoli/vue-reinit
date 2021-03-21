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

## Usage
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

then in your component you can use

```javascript
export default {
  data() {
    return {
      windowWidth: 0,
      list: []
    }
  },
  mounted() {
    this.list = this.$reinit.add(this.getWindowWidth)
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth
    }
  },
  beforeDestroy() {
    this.$reinit(this.list)
  }
}
```