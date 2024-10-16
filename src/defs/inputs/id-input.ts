import { Field, InputType } from "type-graphql";

@InputType()
export class IdInput {
  @Field()
  id: string;
}
