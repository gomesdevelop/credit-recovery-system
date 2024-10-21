import { Field, InputType } from "type-graphql";
import { ContactInput } from "./contact-input";
import { BaseInput } from "./base-input";

@InputType()
export class InstitutionInput extends BaseInput {
  @Field()
  name: string;

  @Field(() => [ContactInput], { nullable: true, defaultValue: [] })
  contacts: ContactInput[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  compliances: string[];
}
