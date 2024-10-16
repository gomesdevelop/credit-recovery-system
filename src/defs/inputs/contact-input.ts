import { ContactType } from "../../enuns/contact-type";
import { Field, InputType } from "type-graphql";

@InputType()
export class ContactInput {
  @Field(() => ContactType, {
    defaultValue: ContactType.OTHER,
    nullable: true,
  })
  type: ContactType;

  @Field()
  description?: string;

  @Field()
  value: string;
}
