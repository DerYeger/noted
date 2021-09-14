import { Entity } from '~/model/entity'
import { Named } from '~/model/named'

export interface Section extends Entity, Named {
  content: string
  notebookId: string
}
