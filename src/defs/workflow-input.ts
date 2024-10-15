import { Field, InputType } from "type-graphql";

@InputType()
export class WorkflowInput {
  @Field()
  institutionId: string;

  @Field()
  name: string;

  @Field(() => [String])
  stages: [string];

  @Field()
  activeCases: number;
}
