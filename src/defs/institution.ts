import { Field, ID, ObjectType } from "type-graphql";
import { Contact } from "./contact";

@ObjectType()
export class Institution {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Contact], { nullable: true, defaultValue: [] })
  contacts: Contact[];

  @Field(() => [String])
  compliances: string[];
}