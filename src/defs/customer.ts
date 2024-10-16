import { Field, ID, ObjectType } from "type-graphql";
import { Contact } from "./contact";
import { Institution } from "./institution";
import { CustomerType } from "../enuns/customer-type";

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  institution: Institution;

  @Field()
  name: string;

  @Field()
  document: string;

  @Field(() => CustomerType)
  type: CustomerType;

  @Field({ nullable: true })
  dateOfBirth: Date;

  @Field(() => [Contact], { nullable: true, defaultValue: [] })
  contacts: Contact[];

  @Field({ nullable: true })
  creditScore: string;

  @Field({ nullable: true })
  riskProfile: string;

  @Field({ nullable: true })
  createdAt: Date;
}
