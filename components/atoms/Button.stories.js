import { defineComponent } from '@nuxtjs/composition-api'
import Button from './Button.vue'

const argTypes = { click: { action: 'click' } }

export default {
  component: Button,
  title: 'button/Button',
  argTypes,
}

const Template = (_, { argTypes }) =>
  defineComponent({
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" @click="click">Button</Button>',
  })

export const Default = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Small = Template.bind({})
Small.args = {
  small: true,
}
