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

  @Field(() => Customer, { nullable: true })
  customer: Customer;

  @Field(() => Institution, { nullable: true })
  institution: Institution;

  @Field(() => [Debt], { nullable: true })
  debts?: Debt[];

  @Field(() => [Payment], { nullable: true })
  payments?: Payment[];

  @Field(() => [Communication], { nullable: true })
  communications: Communication[];

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Priority, { nullable: true })
  priority: Priority;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  closedAt?: Date;

  @Field({ nullable: true })
  assignedAgent?: string;
}
