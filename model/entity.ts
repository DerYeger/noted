import { v4 } from 'uuid'

export interface Entity {
  id: string
}

export type EntityRecord<T extends Entity> = Record<string, T>

export function uuid(): string {
  return v4()
}
