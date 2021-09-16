<template>
  <button
    class="hamburger"
    :class="{ hamburger__active: value }"
    @click="$emit('input', !value)"
  >
    <div class="hamburger__top"></div>
    <div class="hamburger__middle"></div>
    <div class="hamburger__bottom"></div>
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
  all: unset;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 24px;
  justify-content: space-evenly;
  width: 24px;

  --hamburger-size: 24px;
  --hamburger-part-height: calc(var(--hamburger-size) / 8);
  --hamburger-part-margin: calc(
    (var(--hamburger-size) - (3 * var(--hamburger-part-height))) / 5
  );
}

.hamburger__top,
.hamburger__middle,
.hamburger__bottom {
  background-color: var(--text-primary);
  border-radius: var(--border-radius-large);
  height: var(--hamburger-part-height);
  margin-bottom: var(--hamburger-part-margin);
  margin-top: var(--hamburger-part-margin);
  transition: var(--anim-medium);
  width: 100%;
}

.hamburger__top,
.hamburger__bottom {
  transform-origin: 50% 50%;
}

.hamburger__middle {
  transform-origin: 0 0;
}

.hamburger__active .hamburger__top {
  transform: translateY(calc(var(--hamburger-size) / 3)) rotate(45deg);
}

.hamburger__active .hamburger__middle {
  opacity: 0;
  transform: scale(0, 1);
}

.hamburger__active .hamburger__bottom {
  transform: translateY(calc(var(--hamburger-size) / -3)) rotate(-45deg);
}
</style>
