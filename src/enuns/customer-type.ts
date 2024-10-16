import { registerEnumType } from "type-graphql";

export enum CustomerType {
  INDIVIDUAL = "INDIVIDUAL",
  BUSINESS = "BUSINESS",
}

registerEnumType(CustomerType, {
  name: "CustomerType",
});
