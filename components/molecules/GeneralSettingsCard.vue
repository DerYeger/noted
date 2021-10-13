<template>
  <Card class="general-settings">
    <CardTitle>{{ $t('settings.general.title') }}</CardTitle>
    <CardContent>
      <ul>
        <li>
          <label for="sanitize">
            {{ $t('settings.general.sanitize') }}
          </label>
          <SanitizeCheckbox id="sanitize" />
        </li>
        <li>
          <ClearDataButton />
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<style scoped>
.general-settings ul {
  padding: 0;
  margin: 0;
}

.general-settings li {
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style: none;
}

.general-settings li + li {
  margin-top: 1rem;
}
</style>
