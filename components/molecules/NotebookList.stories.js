import { defineComponent } from '@nuxtjs/composition-api'
import NotebookList from './NotebookList.vue'

export default {
  component: NotebookList,
  title: 'notebook/List',
}

const notebooks = [
  {
    id: 'first',
    name: 'First',
  },
  {
    id: 'second',
    name: 'Second',
  },
  {
    id: 'third',
    name: 'Third',
  },
  {
    id: 'fourth',
    name: 'Fourth',
  },
]

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<NotebookList v-bind="$props"  />',
  })

export const Default = Template.bind({})
Default.args = {
  notebooks,
}
