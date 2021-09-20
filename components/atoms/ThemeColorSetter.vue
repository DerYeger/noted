<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {
    return {
      meta: [
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.themeColor as string,
        },
      ],
    }
  },
  computed: {
    themeColor(): string {
      // force dependency on $colorMode.preference
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const colorMode = this.$colorMode.preference
      const style = getComputedStyle(document.body)
      return style.getPropertyValue('--color-background')
    },
  },
})
</script>
