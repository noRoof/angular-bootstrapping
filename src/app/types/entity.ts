export type Entity = {
  id: number
}

/**
 * We can choose to use an array or this entity collection complex form
 */
export type EntityCollection<T> = {
  ids: number[];
  entities: {[id: number]: T};
}
