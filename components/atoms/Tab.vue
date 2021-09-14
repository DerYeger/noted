<template>
  <div v-show="isActive" class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped>
.tab {
  display: inline-block;
  flex-grow: 1;
  min-height: 0;
  width: 100%;
}
</style>
