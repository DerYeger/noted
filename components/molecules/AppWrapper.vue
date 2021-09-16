<template>
  <div class="app__wrapper">
    <slot />
  </div>
</template>

<style scoped>
.app__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
