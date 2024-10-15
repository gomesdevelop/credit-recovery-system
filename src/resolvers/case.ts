// Resolvers define how to fetch the types defined in your schema.

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Case } from "../defs/case";
import Container from "typedi";
import { CaseService } from "../services/case-service";
import { CaseInput } from "../defs/inputs/case-input";

@Resolver(Case)
export class CaseResolver {
  constructor(private readonly service = Container.get(CaseService)) {}

  @Query(() => [Case])
  async getCases(): Promise<Case[]> {
    return new Promise((resolve) => resolve(this.service.getCases()));
  }

  @Mutation(() => Case)
  async createCase(@Arg("data") data: CaseInput): Promise<any> {
    return this.service.createCase(data);
  }
}
