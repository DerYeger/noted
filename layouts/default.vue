<template>
  <AppWrapper>
    <AppHeader :class="{ 'glass-mobile': sidebarOpen }">
      <HamburgerButton v-model="sidebarOpen" style="margin: 0 1rem 0 0.5rem" />
    </AppHeader>
    <div class="app__content">
      <AppSidebar v-model="sidebarOpen" />
      <main :class="{ 'glass-mobile': sidebarOpen }">
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
  height: 100%;
  flex-grow: 1;
}
</style>
