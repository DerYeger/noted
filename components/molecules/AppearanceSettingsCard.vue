<template>
  <Card class="appearance-settings">
    <CardTitle>{{ $t('settings.appearance.title') }}</CardTitle>
    <CardContent>
      <ul>
        <li>
          <label for="color-mode">
            {{ $t('settings.appearance.color-mode') }}
          </label>
          <ColorModeSelect id="color-mode" />
        </li>
        <li>
          <label for="tab-size">{{ $t('settings.appearance.tab-size') }}</label>
          <TabSizeInput id="tab-size" />
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
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style: none;
}

.appearance-settings li + li {
  margin-top: 1rem;
}
</style>
