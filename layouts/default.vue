<template>
  <AppWrapper>
    <AppHeader
      :class="{ 'glass-mobile': sidebarOpen }"
      @sidebar-button-click="sidebarOpen = !sidebarOpen"
    />
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
  height: 100%;
  width: 100%;
}
main {
  height: 100%;
  flex-grow: 1;
}
</style>
