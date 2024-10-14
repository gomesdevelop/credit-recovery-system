import { Field, ID, ObjectType } from "type-graphql";

export enum CommunicationType {
  PHONE = "PHONE",
  EMAIL = "EMAIL",
  SMS = "SMS",
}

@ObjectType()
export class Communication {
  @Field((type) => ID)
  id: string;

  @Field(() => ID)
  caseId: string;

  @Field(() => ID)
  customerId: string;

  @Field()
  type: CommunicationType;

  @Field()
  sendDate: Date;

  @Field()
  content: string;
}
