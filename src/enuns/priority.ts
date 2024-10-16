import { registerEnumType } from "type-graphql";

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

registerEnumType(Priority, {
  name: "Priority",
});
