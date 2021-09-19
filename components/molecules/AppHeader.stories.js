import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from './AppHeader.vue'

export default {
  component: AppHeader,
  title: 'app/Header',
}

const Template = (_) =>
  defineComponent({
    template: '<AppHeader />',
  })

export const Default = Template.bind({})
