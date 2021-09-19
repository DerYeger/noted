import { defineComponent } from '@nuxtjs/composition-api'
import NotebookWall from './NotebookWall.vue'

export default {
  component: NotebookWall,
  title: 'notebook/Wall',
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
    template: '<NotebookWall v-bind="$props"  />',
  })

export const Default = Template.bind({})
Default.args = {
  notebooks,
}
