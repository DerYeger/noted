import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'

export default (_: Context, inject: Inject) => {
  inject('host', process.env.host)
}

declare module 'vue/types/vue' {
  interface Vue {
    $host: string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $host: string
  }
  interface Context {
    $host: string
  }
}
