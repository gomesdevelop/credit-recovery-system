import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Contact } from "./contact";
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
