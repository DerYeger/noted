import { defineComponent } from '@nuxtjs/composition-api'
import TabNavigation from './TabNavigation.vue'

export default {
  component: TabNavigation,
  title: 'misc/TabNavigation',
}

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<TabNavigation v-bind="$props" />',
  })

export const Default = Template.bind({})
Default.args = {
  value: '0',
  tabs: [
    {
      id: '0',
      title: 'First',
    },
    {
      id: '1',
      title: 'Second',
    },
  ],
}
