// Resolvers define how to fetch the types defined in your schema.

import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Case } from "../defs/case";
import Container from "typedi";
import { CaseService } from "../services/case-service";
import { CaseInput } from "../defs/inputs/case-input";

@Resolver(Case)
export class CaseResolver {
  constructor(private readonly service = Container.get(CaseService)) {}

  @Query(() => [Case])
  async getCases(@Ctx() { user }: Context): Promise<Case[]> {
    return new Promise((resolve) => resolve(this.service.getCases(user)));
  }

  @Mutation(() => Case)
  async createCase(
    @Arg("data") data: CaseInput,
    @Ctx() { user }: Context
  ): Promise<any> {
    return this.service.createCase(data, user);
  }
}
