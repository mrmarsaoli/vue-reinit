import { Vue as _Vue } from 'vue-property-decorator'
import { $reinit } from './reinit'
import { ReinitOptions } from './typings'

export const Reinit = {
  install: (Vue: typeof _Vue, options?: ReinitOptions): void => {
    Vue.prototype.$reinit = $reinit
    Vue.mixin({
      created() {
        const opt: ReinitOptions = {
          delay: 500,
          widthOnly: true,
          ...options
        }

        $reinit.set(opt)
      }
    })
  }
}
