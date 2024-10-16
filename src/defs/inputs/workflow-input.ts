import { Field, InputType } from "type-graphql";
import { IdInput } from "./id-input";

@InputType()
export class WorkflowInput {
  @Field(() => IdInput, { nullable: true })
  institution: IdInput;

  @Field()
  name: string;

  @Field(() => [String])
  stages: [string];

  @Field()
  activeCases: number;
}
