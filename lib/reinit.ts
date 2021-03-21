import { ReinitArgAction, ReinitFunction } from './typings'

const actions = {
  set: () => {
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
          reinit.data[i]()
        }
      }, 1000)
    }

    // add event listener
    window.addEventListener('resize', resizeEvent)
  },

  add: (f: ReinitFunction) => {
    // push function to queue
    window.reinit.data.push(f)
  },

  unset: () => {
    window.reinit = window.reinit || {}

    // reset runner
    if (window.reinit.runner) {
      clearTimeout(window.reinit.runner)
    }

    // reset data
    window.reinit.data = []
  }
}

export const $reinit = (action: ReinitArgAction, f?: ReinitFunction): void => {
  console.log(action, f)
  // if reinit not being set
  if (action === 'add' && !window.reinit) {
    actions.set()
  }

  if (action === 'add') {
    if (f) {
      actions.add(f)
    }

    return
  }

  // call action
  actions[action as ReinitArgAction]
}
