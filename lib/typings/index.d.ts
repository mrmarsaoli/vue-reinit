declare global {
  interface Window {
    reinit: Reinit
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $reinit: {
      set(options: ReinitOptions): void
      unset(): void
      add(...f: ReinitFunction[]): string[]
      remove(names: string[]): void
    }
  }
}

export type ReinitFunction = (...args: any[]) => any

export interface ReinitData {
  name: string
  f: ReinitFunction
}

export interface Reinit {
  oldWidth?: number
  data: ReinitData[]
  runner?: ReturnType<typeof setTimeout> | undefined
}

export interface ReinitOptions {
  delay?: number
  widthOnly?: boolean
}
