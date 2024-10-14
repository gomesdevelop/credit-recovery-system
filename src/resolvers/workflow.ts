// Resolvers define how to fetch the types defined in your schema.

import { Query, Resolver } from "type-graphql";
import { Workflow } from "../defs/workflow";
import { workflows } from "../../data";

// This resolver retrieves books from the "institutions" array above.
@Resolver()
export class WorkflowResolver {
  @Query(() => [Workflow])
  async workflows(): Promise<Workflow[]> {
    return Promise.resolve(workflows);
  }
}
