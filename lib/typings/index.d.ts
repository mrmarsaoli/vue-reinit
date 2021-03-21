declare global {
  interface Window {
    reinit: Reinit
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $reinit(action: ReinitArgAction, f?: ReinitFunction): void
  }
}

export type ReinitFunction = (...args: any[]) => any

export interface Reinit {
  oldWidth?: number
  data: ReinitFunction[]
  runner?: ReturnType<typeof setTimeout> | undefined
}

export type ReinitArgAction = 'set' | 'add' | 'unset'
export type ReinitArg = ReinitFunction | ReinitArgAction
