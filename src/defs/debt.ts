import { Field, ID, ObjectType } from "type-graphql";
import { Customer } from "./customer";
import { Institution } from "./institution";
import { DebtType } from "../enuns/debt-type";

@ObjectType()
export class Debt {
  @Field(() => ID)
  id: string;

  @Field(() => Customer, { nullable: true })
  customer: Customer;

  @Field(() => Institution, { nullable: true })
  institution: Institution;

  @Field(() => Number, { nullable: true })
  originalAmount: Number;

  @Field(() => Number, { nullable: true })
  outstandingAmount: Number;

  @Field(() => DebtType, { nullable: true })
  type: DebtType;

  @Field({ nullable: true })
  dueDate: Date;

  @Field({ nullable: true })
  interestRate: Number;

  @Field({ nullable: true })
  createdAt: Date;
}
