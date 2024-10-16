import { Field, InputType } from "type-graphql";
import { DebtType } from "../../enuns/debt-type";
import { IdInput } from "./id-input";

@InputType()
export class DebtInput {
  @Field(() => IdInput, { nullable: true })
  customerId: IdInput;

  @Field(() => IdInput, { nullable: true })
  institutionId: IdInput;

  @Field({ nullable: true })
  originalAmount: Number;

  @Field({ nullable: true })
  outstandingAmount: Number;

  @Field(() => DebtType, { nullable: true })
  type: DebtType;

  @Field({ nullable: true })
  dueDate: Date;

  @Field({ nullable: true })
  interestRate: Number;
}
