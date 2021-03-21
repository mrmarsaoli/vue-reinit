import { ReinitFunction, ReinitOptions } from './typings'

export const $reinit = {
  set: (options: ReinitOptions) => {
    if (window.reinit) {
      return
    }

    // made reinit
    window.reinit = {
      data: []
    }

    // store reinit
    const reinit = window.reinit

    // store window width
    reinit.oldWidth = window.innerWidth
    reinit.data = []

    const resizeEvent = () => {
      if (window.reinit.runner) {
        clearTimeout(window.reinit.runner)
      }

      window.reinit.runner = setTimeout(() => {
        if (window.innerWidth === reinit.oldWidth) {
          // update width
          reinit.oldWidth = window.innerWidth
          return
        }

        // update width
        reinit.oldWidth = window.innerWidth

        for (let i = 0; i < reinit.data.length; i++) {
          // run function
          reinit.data[i].f()
        }
      }, options.delay)
    }

    // add event listener
    window.addEventListener('resize', resizeEvent)
  },

  unset: () => {
    window.reinit = window.reinit || {}

    // reset runner
    if (window.reinit.runner) {
      clearTimeout(window.reinit.runner)
    }

    // reset data
    window.reinit.data = []
  },

  add(...f: ReinitFunction[]) {
    const data = f.map((item) => ({
      name: 're_' + Date.now(),
      f: item
    }))

    // push function to queue
    window.reinit.data = window.reinit.data.concat(data)

    return data.map((item) => item.name)
  },

  remove: (names: string[]) => {
    names.forEach((name) => {
      const index = window.reinit.data.findIndex((item) => item.name === name)

      if (index === -1) {
        return
      }

      window.reinit.data.splice(index, 1)
    })
  }
}
