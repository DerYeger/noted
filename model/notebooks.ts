import { Entity } from '~/model/entity'
import { Named } from '~/model/named'

export interface Notebook extends Entity, Named {
  sectionIds: string[]
  lastEdit: number
}
