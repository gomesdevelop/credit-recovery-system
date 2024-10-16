import { registerEnumType } from "type-graphql";

export enum DebtType {
  OTHER = "OTHER",
  LOAN = "LOAN",
  CREDIT_CARD = "CREDIT_CARD",
  MORTGAGE = "MORTGAGE",
}

registerEnumType(DebtType, {
  name: "DebtType",
});
