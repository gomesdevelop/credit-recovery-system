import { Field, ID, ObjectType } from "type-graphql";
import { Institution } from "./institution";

@ObjectType()
export class Workflow {
  @Field(() => ID)
  id: String;

  @Field(() => Institution, { nullable: true })
  institution: Institution;

  @Field({ nullable: true })
  name: String;

  @Field(() => [String], { nullable: true })
  stages: [String];

  @Field({ nullable: true })
  activeCases: number;
}
