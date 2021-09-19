import { defineComponent } from '@nuxtjs/composition-api'
import HamburgerButton from './HamburgerButton.vue'

export default {
  component: HamburgerButton,
  title: 'button/HamburgerButton',
}

const Template = (_) =>
  defineComponent({
    data: () => ({ value: false }),
    template: '<HamburgerButton v-model="value">Button</HamburgerButton>',
  })

export const Default = Template.bind({})
