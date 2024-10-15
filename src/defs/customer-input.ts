import { Field, InputType, registerEnumType } from "type-graphql";
import { CustomerType } from "./customer";

registerEnumType(CustomerType, {
  name: "CustomerType",
});

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  institutionId: String;
}
