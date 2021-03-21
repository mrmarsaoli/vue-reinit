import { Vue as _Vue } from 'vue-property-decorator'
import { $reinit } from './reinit'

export const reinit = {
  install: (Vue: typeof _Vue): void => {
    Vue.prototype.$reinit = $reinit
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(reinit)
}
