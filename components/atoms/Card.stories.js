import { defineComponent } from '@nuxtjs/composition-api'
import Card from './Card.vue'

export default {
  component: Card,
  title: 'card/Card',
}

const Template = (_) =>
  defineComponent({
    template: '<Card />',
  })

export const Default = Template.bind({})
