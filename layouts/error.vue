<template>
  <div class="app__error">
    <h1 v-if="error && error.statusCode === 404" class="text--secondary">
      404
    </h1>
    <h1 v-else class="text--secondary">
      {{ error.message }}
    </h1>
    <NuxtLink :to="localePath(homeRoute.path)">
      {{ $t(homeRoute.title) }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'
import { MetaInfo } from 'vue-meta'
import { routes } from '~/model/routes'

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      required: true,
    },
  },
  data() {
    return {
      homeRoute: routes.home,
    }
  },
  head(): MetaInfo {
    const title = this.error.statusCode === 404 ? '404' : this.error.message
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
