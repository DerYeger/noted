<template>
  <Card class="appearance-settings">
    <CardTitle>{{ $t('settings.appearance.title') }}</CardTitle>
    <CardContent>
      <ul>
        <li>
          <span>{{ $t('settings.appearance.color-mode') }}</span>
          <ColorModeSelect />
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<style scoped>
.appearance-settings ul {
  padding: 0;
  margin: 0;
}

.appearance-settings li {
  list-style: none;
}

.appearance-settings li span {
  margin-right: 1rem;
}
</style>
