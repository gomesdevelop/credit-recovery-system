import { Field, ID, ObjectType } from "type-graphql";
import { Customer } from "./customer";
import { Institution } from "./institution";
import { Debt } from "./debt";
import { Payment } from "./payment";
import { Communication } from "./communication";

export enum CasePriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum CaseStatus {
  OPEN = "OPEN",
  IN_NEGOTIATION = "IN_NEGOTIATION",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

@ObjectType()
export class Case {
  @Field((type) => ID)
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

  @Field()
  status: CaseStatus;

  @Field()
  priority: CasePriority;

  @Field()
  createdAt: Date;

  @Field()
  closedAt?: Date;

  @Field()
  assignedAgent?: string;
}
