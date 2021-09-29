<template>
  <masonry-wall
    v-slot="{ item }"
    :items="components"
    :column-width="400"
    :gap="16"
    class="pa-4"
  >
    <component :is="item.name" v-bind="item.props" />
  </masonry-wall>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'
import { DynamicComponent } from '~/types/dynamicComponent'
import { generateSocialTags } from '~/model/meta'
import { routes } from '~/model/routes'

export default defineComponent({
  head(): MetaInfo {
    const title = this.$t(routes.settings.title) as string
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  computed: {
    components(): DynamicComponent[] {
      return [
        {
          name: 'GeneralSettingsCard',
        },
        {
          name: 'AppearanceSettingsCard',
        },
      ]
    },
  },
})
</script>
