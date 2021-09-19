import { defineComponent } from '@nuxtjs/composition-api'
import RenderView from './RenderView.vue'

export default {
  component: RenderView,
  title: 'editor/RenderView',
}

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<RenderView v-bind="$props" />',
  })

export const Default = Template.bind({})
Default.args = {
  input:
    '# Test\n```ts\nexport function test(): string {\n\treturn true\n}\n```',
}
