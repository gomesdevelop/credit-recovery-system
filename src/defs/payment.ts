import { Field, ID, ObjectType } from "type-graphql";

export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  CASH = "CASH",
  DEBIT = "DEBIT",
  TRANSFER = "TRANSFER",
  OTHER = "OTHER",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  CANCELED = "CANCELED",
}

@ObjectType()
export class Payment {
  @Field((type) => ID)
  id: string;

  @Field(() => ID)
  caseId: string;

  @Field(() => ID)
  debtId: string;

  @Field()
  amount: number;

  @Field()
  method: PaymentMethod;

  @Field()
  status: PaymentStatus;

  @Field()
  createdAt: Date;

  @Field()
  paymentAt: Date;
}
