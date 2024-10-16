import { Priority } from "../../enuns/priority";
import { Status } from "../../enuns/status";
import { Field, InputType } from "type-graphql";

@InputType()
export class CaseInput {
  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Priority, { nullable: true })
  priority: Priority;

  @Field({ nullable: true })
  assignedAgent: String;

  @Field({ nullable: true })
  closedAt: Date;

  @Field()
  institutionId: String;

  @Field()
  customerId: String;
}
