import { ContactType } from "../enuns/contact-type";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Contact {
  @Field(() => ID)
  id: string;

  @Field(() => ContactType, { defaultValue: ContactType.OTHER })
  type: ContactType;

  @Field()
  description?: string;

  @Field()
  value: string;
}
