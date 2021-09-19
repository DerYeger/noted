import { defineComponent } from '@nuxtjs/composition-api'
import AppSidebar from './AppSidebar.vue'

export default {
  component: AppSidebar,
  title: 'app/Sidebar',
}

const Template = (_) =>
  defineComponent({
    template: '<AppSidebar :value="true" />',
  })

export const Default = Template.bind({})
