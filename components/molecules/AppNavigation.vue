<template>
  <nav class="app__navigation">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <NuxtLink :to="route.path" class="unselectable">
          {{ $t(route.title) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  data() {
    return {
      routes,
    }
  },
})
</script>

<style scoped>
.app__navigation ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
}

.app__navigation li {
  display: inline-block;
  list-style: none;
  margin-top: 0.5rem;
}

.app__navigation a {
  color: var(--text-primary);
  display: block;
}
</style>
