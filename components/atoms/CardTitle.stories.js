import { defineComponent } from '@nuxtjs/composition-api'
import CardTitle from './CardTitle.vue'

export default {
  component: CardTitle,
  title: 'card/CardTitle',
}

const Template = (_) =>
  defineComponent({
    template: '<Card><CardTitle>CardTitle</CardTitle></Card>',
  })

export const Default = Template.bind({})
