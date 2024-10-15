import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from "type-graphql";
import { CasePriority, CaseStatus } from "./case";

registerEnumType(CaseStatus, {
  name: "CaseStatus",
});

registerEnumType(CasePriority, {
  name: "CasePriority",
});

@InputType()
export class CaseInput {
  @Field((type) => CaseStatus, { nullable: true })
  status: CaseStatus;

  @Field((type) => CasePriority, { nullable: true })
  priority: CasePriority;

  @Field({ nullable: true })
  assignedAgent: String;

  @Field({ nullable: true })
  closedAt: Date;

  @Field()
  institutionId: String;

  @Field()
  customerId: String;
}
