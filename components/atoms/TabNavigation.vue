<template>
  <nav>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ selected: tab.id === value }"
        class="darken-on-focus"
        @click="$emit('input', tab.id)"
        @contextmenu.prevent="$emit('menu', tab.id)"
      >
        <span>{{ tab.title }}</span>
      </li>
      <li class="darken-on-focus add" @click="$emit('add')">
        <span>+</span>
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
  display: flex;
  flex-direction: column;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0 0 1rem -1rem;
  min-height: 4.125rem;
  padding: 1rem;
  overflow-x: scroll;
  overflow-x: overlay;
}

li {
  background: var(--color-lighten-2);
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 6rem;
  text-align: center;
  white-space: nowrap;
  margin-left: 1rem;
}

li > span {
  margin: 0.5rem 1rem 0.5rem 1rem;
}

li.selected {
  background: var(--color-lighten-3);
}

li.add {
  min-width: unset;
}
</style>
