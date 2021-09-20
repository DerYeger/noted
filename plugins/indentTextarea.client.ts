import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { eventHandler } from 'indent-textarea'

export default (_: Context, inject: Inject) => {
  inject('indentHandler', eventHandler)
}

declare module 'vue/types/vue' {
  interface Vue {
    $indentHandler: typeof eventHandler
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $indentHandler: typeof eventHandler
  }
  interface Context {
    $indentHandler: typeof eventHandler
  }
}
