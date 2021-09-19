import { defineComponent } from '@nuxtjs/composition-api'
import CardActions from './CardActions.vue'

export default {
  component: CardActions,
  title: 'card/CardAction',
}

const Template = (_) =>
  defineComponent({
    template: '<Card><CardActions><Button>Button</Button></CardActions></Card>',
  })

export const Default = Template.bind({})
