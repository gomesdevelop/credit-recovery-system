import { Field, ID, ObjectType } from "type-graphql";
import { Institution } from "./institution";

@ObjectType()
export class Workflow {
  @Field((type) => ID)
  id: string;

  @Field(() => Institution)
  institution: Institution;

  @Field()
  name: string;

  @Field()
  stages: string;

  @Field()
  activeCases: number;
}
