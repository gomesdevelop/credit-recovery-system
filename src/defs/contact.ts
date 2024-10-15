import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Contact {
  @Field(() => ID)
  id: string;

  @Field()
  description?: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  email: string;
}
