import { Field, InputType } from "type-graphql";
import { ContactInput } from "./contact-input";
import { CustomerType } from "../../enuns/customer-type";
import { IdInput } from "./id-input";
import { BaseInput } from "./base-input";

@InputType()
export class CustomerInput extends BaseInput {
  @Field()
  name: string;

  @Field()
  document: string;

  @Field(() => IdInput, { nullable: true })
  institution: IdInput;

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
