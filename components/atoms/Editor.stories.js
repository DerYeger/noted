import { defineComponent } from '@nuxtjs/composition-api'
import Editor from './Editor.vue'

export default {
  component: Editor,
  title: 'editor/Editor',
}

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<Editor />',
  })

export const Default = Template.bind({})
