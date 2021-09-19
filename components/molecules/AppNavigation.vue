<template>
  <nav class="app__navigation">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <NuxtLink
          :to="localePath(route.path)"
          class="elevated no-touch-callout unselectable"
        >
          {{ $t(route.title) }}
        </NuxtLink>
      </li>
      <li>
        <a
          class="elevated no-touch-callout source-link unselectable"
          href="https://github.com/DerYeger/noted"
          rel="noopener"
          target="_blank"
        >
          {{ $t('misc.source-code') }}
        </a>
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
  padding: 0 1rem 1rem 0;
  height: 100%;
}

.app__navigation li {
  display: inline-block;
  list-style: none;
  margin-top: 1rem;
}

.app__navigation a {
  border-bottom-right-radius: var(--border-radius-xl);
  border-top-right-radius: var(--border-radius-xl);
  color: var(--text-primary);
  display: block;
  margin-left: -1rem;
  padding: 0.75em 2rem 0.75em 2rem;
  transition: background var(--anim-medium) ease;
  text-decoration: none;
}

.app__navigation a:focus-visible,
.app__navigation a:hover {
  background: var(--color-lighten-2);
}

.app__navigation a.nuxt-link-exact-active {
  background: var(--color-lighten-3);
}

.source-link {
  font-size: var(--fs-small);
  margin-top: 2rem;
}
</style>
