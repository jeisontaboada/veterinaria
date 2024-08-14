import { CreateGraphInput } from './create-graph.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphInput extends PartialType(CreateGraphInput) {
  @Field(() => Int)
  id: number;
}
