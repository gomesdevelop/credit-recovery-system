import { Field, ID, ObjectType } from "type-graphql";
import { Customer } from "./customer";
import { Institution } from "./institution";
import { Payment } from "./payment";

export enum DebtType {
  LOAN = "LOAN",
  CREDIT = "CREDIT",
  CARD = "CARD",
  MORTGAGE = "MORTGAGE",
}

@ObjectType()
export class Debt {
  @Field((type) => ID)
  id: string;

  @Field(() => Customer)
  customer: Customer;

  @Field(() => Institution)
  institution: Institution;

  @Field()
  originalAmount: number;

  @Field()
  outstandingAmount: number;

  @Field(() => [Payment])
  payments?: Payment[];

  @Field()
  debtType: DebtType;
}
