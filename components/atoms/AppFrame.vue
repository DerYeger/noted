<template>
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  background: conic-gradient(
    from 3rad at 105% 50%,
    var(--color-primary),
    var(--color-secondary-darken)
  );
  height: 100%;
}
</style>
