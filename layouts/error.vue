<template>
  <div class="app__error">
    <h1 v-if="error && error.statusCode === 404">404</h1>
    <h1 v-else>
      {{ error.message }}
    </h1>
    <NuxtLink :to="localePath('/')">{{ $t('routes.home') }}</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      required: true,
    },
  },
  head() {
    const error = this.error as NuxtError
    const title = error.statusCode === 404 ? '404' : error.message
    return {
      title,
    }
  },
})
</script>

<style scoped>
.app__error {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
