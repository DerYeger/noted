import createPersistedState from 'vuex-persistedstate'
import { Context } from '@nuxt/types'

export default (context: Context) => {
  createPersistedState()(context.store)
}
