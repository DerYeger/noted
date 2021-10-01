<template>
  <AppWrapper :class="{ 'sidebar-open': sidebarOpen }">
    <ClientOnly>
      <ThemeColorSetter />
    </ClientOnly>
    <AppHeader>
      <HamburgerButton
        v-model="sidebarOpen"
        style="margin: 0 1rem 0 0.5rem"
        :aria-label="$t('actions.toggle-menu')"
      />
    </AppHeader>
    <div class="app__content">
      <AppSidebar v-model="sidebarOpen" />
      <main class="depressed">
        <Nuxt />
      </main>
    </div>
  </AppWrapper>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'

export default defineComponent({
  data() {
    return {
      sidebarOpen: false,
    }
  },
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
})
</script>

<style scoped>
.app__content {
  display: flex;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
}

main {
  background: var(--color-lighten-1);
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  transition: position var(--anim-medium) ease,
    transform var(--anim-medium) ease, width var(--anim-medium) ease;
  overflow-y: auto;
  transform: translateX(0);
}

@media only screen and (max-width: 600px) {
  .sidebar-open main {
    flex-basis: 0;
    transform: translateX(100%);
  }
}

@media only screen and (min-width: 601px) {
  .sidebar-open main {
    border-top-left-radius: var(--border-radius-large);
  }
}
</style>
