import { Field, InputType } from "type-graphql";
import { ContactInput } from "./contact-input";
import { CustomerType } from "../../enuns/customer-type";

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  document: string;

  @Field()
  institutionId: String;

  @Field(() => CustomerType, {
    defaultValue: CustomerType.INDIVIDUAL,
    nullable: true,
  })
  type: CustomerType;

  @Field({ nullable: true })
  dateOfBirth: Date;

  @Field(() => [ContactInput], { nullable: true, defaultValue: [] })
  contacts: ContactInput[];

  @Field({ nullable: true })
  creditScore: string;

  @Field({ nullable: true })
  riskProfile: string;
}
