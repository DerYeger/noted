<template>
  <li class="nav-item">
    <NuxtLink
      v-if="!route.external"
      :to="localePath(route.path)"
      class="elevated unselectable"
      :class="{ standalone: !route.subRoute, 'sub-route': route.subRoute }"
      @click.native="$emit('navigate')"
    >
      {{ route.dynamic ? route.title : $t(route.title) }}
      <OpenInNewIcon v-if="route.external" />
    </NuxtLink>
    <a
      v-else
      class="elevated sub-route unselectable"
      :class="{ standalone: !route.subRoute, 'sub-route': route.subRoute }"
      :href="route.path"
      rel="noopener"
      target="_blank"
      @click="$emit('navigate')"
    >
      {{ route.dynamic ? route.title : $t(route.title) }}
      <OpenInNewIcon v-if="route.external" />
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Route } from '~/model/routes'

export default defineComponent({
  props: {
    route: {
      type: Object as PropType<Route>,
      required: true,
    },
  },
})
</script>

<style scoped>
.nav_item {
  display: inline-block;
  list-style: none;
  margin-top: 1rem;
}

.nav-item a {
  background: var(--background-concave);
  border-bottom-right-radius: var(--border-radius-xl);
  border-top-right-radius: var(--border-radius-xl);
  color: var(--text-primary);
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
  margin-top: 1rem;
  padding: 0.75em 2rem 0.75em 2rem;
  transition: background var(--anim-medium) ease;
}

.nav-item a:focus-visible,
.nav-item a:hover {
  background: var(--color-lighten-2);
}

.nav-item a.nuxt-link-exact-active {
  background: var(--color-lighten-3);
}

.nav-item a.standalone {
  margin-top: 3rem;
}

.nav-item a.sub-route {
  font-size: var(--fs-small);
}

.nav-item:first-child a {
  margin-top: 1rem;
}

.nav-item a .material-design-icon {
  font-size: var(--fs-small);
  position: absolute;
  right: 2rem;
}
</style>
