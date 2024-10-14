import { Field, ID, ObjectType } from "type-graphql";
import { Contact } from "./contact";
import { Institution } from "./institution";

@ObjectType()
export class Customer {
  @Field((type) => ID)
  id: string;

  @Field()
  institution: Institution;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  dateOfBirth: Date;

  @Field(() => [Contact], { nullable: true, defaultValue: [] })
  contacts: Contact[];

  @Field()
  creditScore: string;

  @Field(() => [String])
  riskProfile: string[];
}
