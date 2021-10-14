<template>
  <div class="app__wrapper" :style="{ '--tab-size': tabSize }">
    <ClientOnly>
      <ThemeColorSetter />
    </ClientOnly>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'

export default defineComponent({
  head(): MetaInfo {
    const path = this.$route.path.length === 1 ? '' : this.$route.path
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description') as string,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${this.$host}${path}/`,
        },
      ],
    }
  },
  computed: {
    tabSize(): number {
      return this.$store.getters['settings/tabSize']
    },
  },
})
</script>

<style scoped>
.app__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
