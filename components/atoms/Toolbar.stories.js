import { defineComponent } from '@nuxtjs/composition-api'
import Toolbar from './Toolbar.vue'

export default {
  component: Toolbar,
  title: 'misc/Toolbar',
}

const Template = (_) =>
  defineComponent({
    template:
      '<Toolbar><Button>Button</Button><Button>Button</Button><Button>Button</Button></Toolbar>',
  })

export const Default = Template.bind({})
