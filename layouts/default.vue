<template>
  <AppWrapper>
    <AppHeader :class="{ 'glass-mobile': sidebarOpen }">
      <HamburgerButton v-model="sidebarOpen" style="margin: 0 1rem 0 0.5rem" />
    </AppHeader>
    <div class="app__content">
      <AppSidebar v-model="sidebarOpen" />
      <main :class="{ 'glass-mobile': sidebarOpen, 'rounded-top-left': sidebarOpen }">
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
  height: 100%;
  overflow-x: hidden;
  flex-grow: 1;
}

@media only screen and (min-width: 601px) {
  .rounded-top-left {
    border-top-left-radius: var(--border-radius-large);
  }
}
</style>
