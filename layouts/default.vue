<template>
  <AppWrapper :class="{ 'sidebar-open': sidebarOpen }">
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

export default defineComponent({
  data() {
    return {
      sidebarOpen: false,
    }
  },
  computed: {
    showAbout(): boolean {
      return this.$store.getters['settings/showAbout']
    },
  },
  watch: {
    showAbout: {
      immediate: true,
      handler(value: boolean): void {
        if (value) {
          this.$router.push(this.localePath('/about'))
        }
      },
    },
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
