import { defineComponent } from '@nuxtjs/composition-api'
import NotebookCard from './NotebookCard.vue'

export default {
  component: NotebookCard,
  title: 'notebook/Card',
}

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<NotebookCard v-bind="$props" />',
  })

export const Default = Template.bind({})
Default.args = {
  notebook: { id: 'notebook-id', name: 'NotebookName' },
}
