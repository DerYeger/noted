<template>
  <button
    class="hamburger unselectable"
    :class="{ hamburger__active: value }"
    @click="$emit('input', !value)"
  >
    <div class="hamburger__top" />
    <div class="hamburger__middle" />
    <div class="hamburger__bottom" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style scoped>
.hamburger {
  --hamburger-height: 1.5rem;
  --hamburger-part-height: calc(var(--hamburger-height) / 8);
  --hamburger-part-margin: calc(
    (var(--hamburger-height) - (3 * var(--hamburger-part-height))) / 5
  );
  --hamburger-width: 1.25rem;

  all: unset;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: var(--hamburger-height);
  justify-content: space-evenly;
  width: var(--hamburger-width);
}

.hamburger__top,
.hamburger__middle,
.hamburger__bottom {
  background-color: var(--text-primary);
  border-radius: var(--border-radius-large);
  filter: brightness(90%);
  height: var(--hamburger-part-height);
  margin-bottom: var(--hamburger-part-margin);
  margin-top: var(--hamburger-part-margin);
  transform-origin: 50% 50%;
  transition: var(--anim-medium);
  width: var(--hamburger-width);
}

.hamburger__active .hamburger__top {
  transform: translateY(calc(var(--hamburger-height) / 3)) rotate(45deg);
}

.hamburger__active .hamburger__middle {
  opacity: 0;
  transform: scale(0, 1);
}

.hamburger__active .hamburger__bottom {
  transform: translateY(calc(var(--hamburger-height) / -3)) rotate(-45deg);
}
</style>
