<template>
  <nav class="app__navigation">
    <ul>
      <NavItem
        v-for="route in routes"
        :key="route.path"
        :route="route"
        @navigate="$emit('navigate')"
      />
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { getNotebookPath, Route, routes } from '~/model/routes'
import { Notebook } from '~/model/notebooks'

export default defineComponent({
  computed: {
    routes(): Route[] {
      const recentNotebooks: Notebook[] =
        this.$store.getters['notebooks/recent'](3)
      const recentNotebookRoutes: Route[] = recentNotebooks.map((notebook) => ({
        title: notebook.name,
        path: this.localePath(getNotebookPath(notebook)),
        external: false,
        subRoute: true,
        dynamic: true,
      }))
      return [
        routes.home,
        routes.notebooks,
        ...recentNotebookRoutes,
        routes.settings,
        routes.about,
        routes.source,
      ]
    },
  },
})
</script>

<style scoped>
.app__navigation ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0 1rem 1rem 0;
}
</style>
