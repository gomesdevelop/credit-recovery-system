import { Field, ID, ObjectType } from "type-graphql";
import { Customer } from "./customer";
import { Institution } from "./institution";
import { Debt } from "./debt";
import { Payment } from "./payment";
import { Communication } from "./communication";
import { Status } from "../enuns/status";
import { Priority } from "../enuns/priority";

@ObjectType()
export class Case {
  @Field(() => ID)
  id: string;

  @Field(() => Customer)
  customer: Customer;

  @Field(() => Institution)
  institution: Institution;

  @Field(() => [Debt])
  debts?: Debt[];

  @Field(() => [Payment])
  payments?: Payment[];

  @Field(() => [Communication])
  communications: Communication[];

  @Field(() => Status)
  status: Status;

  @Field(() => Priority)
  priority: Priority;

  @Field()
  createdAt: Date;

  @Field()
  closedAt?: Date;

  @Field()
  assignedAgent?: string;
}
