import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class BaseDef {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  owner_id: string;
}
