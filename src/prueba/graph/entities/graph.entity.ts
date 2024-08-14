import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Graph {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
