<template>
  <NuxtLink
    class="logo-link"
    :aria-label="$t('app.title')"
    :style="{ height: size, width: size }"
    :to="localePath('/')"
  >
    <Logo />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    size: {
      type: String,
      required: true,
    },
  },
  computed: {
    sizePx(): string {
      return `${this.size}px`
    },
  },
})
</script>

<style>
.logo-link {
  display: block;
}

.logo-link svg {
  height: 100%;
}
</style>
