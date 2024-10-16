import { registerEnumType } from "type-graphql";

export enum ContactType {
  PHONE = "PHONE",
  EMAIL = "EMAIL",
  ADDRESS = "ADDRESS",
  WEBSITE = "WEBSITE",
  OTHER = "OTHER",
}

registerEnumType(ContactType, {
  name: "ContactType",
});
