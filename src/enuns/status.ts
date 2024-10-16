import { registerEnumType } from "type-graphql";

export enum Status {
  OPEN = "OPEN",
  IN_NEGOTIATION = "IN_NEGOTIATION",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

registerEnumType(Status, {
  name: "Status",
});
