import { Field, ID, ObjectType } from "type-graphql";
import { Contact } from "./contact";
import { Institution } from "./institution";

export enum CustomerType {
  INDIVIDUAL = "INDIVIDUAL",
  BUSINESS = "BUSINESS",
}

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  institution: Institution;

  @Field()
  name: string;

  @Field()
  type: CustomerType;

  @Field({ nullable: true })
  dateOfBirth: Date;

  @Field(() => [Contact], { nullable: true, defaultValue: [] })
  contacts: Contact[];

  @Field({ nullable: true })
  creditScore: string;

  @Field(() => [String], { nullable: true })
  riskProfile: string[];
}
