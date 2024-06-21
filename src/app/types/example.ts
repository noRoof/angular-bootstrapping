import { Entity } from "./entity"

export type ExampleBody =  {
  name: string;
  description: string;
}

export type MoreData = {
  key: string;
  value: string;
}

/**
 * To be used with basic information to be listed about examples
 */
export type Example = Entity & ExampleBody;

/**
 * To be used with detailed information about examples
 */
export type ExampleDetails = Example & {
  otherData: MoreData[];
}
