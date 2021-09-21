<template>
  <nav>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ selected: tab.id === value }"
        @click="$emit('input', tab.id)"
        @contextmenu.prevent="$emit('menu', tab.id)"
      >
        <Button small>{{ tab.title }}</Button>
      </li>
      <li @click="$emit('add')">
        <Button small>
          <PlusIcon />
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Tab } from '~/model/tab'

export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
nav {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0 1rem;
  padding: 0;
}

li {
  text-align: center;
  white-space: nowrap;
}

li.selected button {
  background: var(--color-lighten-2);
}
</style>
