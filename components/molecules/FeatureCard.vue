<template>
  <Card class="feature-card">
    <CardContent>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="feature" />
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.feature-card span {
  display: block;
  text-align: center;
  width: 100%;
}
</style>
