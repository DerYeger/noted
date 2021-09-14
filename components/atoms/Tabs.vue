<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :class="{ selected: index === selectedIndex }"
        class="darken-on-focus"
        @click="selectTab(index)"
      >
        <span>{{ tab.title }}</span>
      </li>
      <li class="darken-on-focus add" @click="$emit('add')">
        <span>+</span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      const oldTab = this.tabs[this.selectedIndex]
      if (oldTab !== undefined) {
        oldTab.isActive = false
      }
      this.selectedIndex = i
      const newTab = this.tabs[this.selectedIndex]
      if (newTab !== undefined) {
        newTab.isActive = true
      }
    },
  },
}
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
}

.tabs__header {
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  min-height: 4.125rem;
  padding: 1rem;
  overflow-x: auto;
}

li {
  color: var(--text-primary);
  cursor: pointer;
  background: var(--color-lighten-2);
  border-radius: var(--border-radius-medium);
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
