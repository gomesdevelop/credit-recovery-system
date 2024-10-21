import { Field, ObjectType } from "type-graphql";
import { Contact } from "./contact";
import { BaseDef } from "./base";

@ObjectType()
export class Institution extends BaseDef {
  @Field({ nullable: true })
  name: string;

  @Field(() => [Contact], { nullable: true, defaultValue: [] })
  contacts: Contact[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  compliances: string[];
}
