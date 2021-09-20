<template>
  <AppWrapper>
    <AppHeader>
      <HamburgerButton v-model="sidebarOpen" style="margin: 0 1rem 0 0.5rem" />
    </AppHeader>
    <div class="app__content">
      <AppSidebar v-model="sidebarOpen" />
      <main class="depressed" :class="{ 'rounded-top-left': sidebarOpen }">
        <Nuxt />
      </main>
    </div>
  </AppWrapper>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      sidebarOpen: false,
    }
  },
  head() {
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
})
</script>

<style scoped>
.app__content {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
}

main {
  background: var(--color-lighten-1);
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  transition: var(--anim-medium);
}

@media only screen and (min-width: 601px) {
  .rounded-top-left {
    border-top-left-radius: var(--border-radius-large);
  }
}
</style>
