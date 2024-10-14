import { Field, ID, InputType, ObjectType } from "type-graphql";

@InputType()
export class ContactInput {
  @Field()
  description?: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  email: string;
}
