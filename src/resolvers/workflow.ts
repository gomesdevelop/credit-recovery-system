// Resolvers define how to fetch the types defined in your schema.

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Workflow } from "../defs/workflow";
import Container from "typedi";
import { WorkflowService } from "../services/workflow-service";
import { WorkflowInput } from "../defs/inputs/workflow-input";

// This resolver retrieves books from the "institutions" array above.
@Resolver()
export class WorkflowResolver {
  constructor(private readonly service = Container.get(WorkflowService)) {}

  @Query(() => [Workflow])
  async getWorkflows(): Promise<Workflow[]> {
    return Promise.resolve(this.service.getWorkflows());
  }

  @Mutation(() => Workflow)
  async createWorkflow(@Arg("data") data: WorkflowInput): Promise<any> {
    return this.service.createWorkflow(data);
  }
}
