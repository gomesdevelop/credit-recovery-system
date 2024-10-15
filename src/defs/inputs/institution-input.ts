import { Field, InputType } from "type-graphql";
import { ContactInput } from "./contact-input";

@InputType()
export class InstitutionInput {
  @Field()
  name: string;

  @Field(() => [ContactInput])
  contacts: ContactInput[];

  @Field(() => [String])
  compliances: string[];
}
