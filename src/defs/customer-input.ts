import { Field, InputType, registerEnumType } from "type-graphql";
import { CustomerType } from "./customer";
import { ContactInput } from "./contact-input";

registerEnumType(CustomerType, {
  name: "CustomerType",
});

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  institutionId: String;

  @Field((type) => CustomerType, {
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

  @Field(() => [String], { nullable: true })
  riskProfile: string[];
}
