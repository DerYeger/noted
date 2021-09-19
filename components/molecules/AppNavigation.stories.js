import { defineComponent } from '@nuxtjs/composition-api'
import AppNavigation from './AppNavigation.vue'

export default {
  component: AppNavigation,
  title: 'app/Navigation',
}

const Template = (_) =>
  defineComponent({
    template: '<AppNavigation />',
  })

export const Default = Template.bind({})
