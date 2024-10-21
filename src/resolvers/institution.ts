// Resolvers define how to fetch the types defined in your schema.

import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Institution } from "../defs/institution";
import { InstitutionInput } from "../defs/inputs/institution-input";
import Container from "typedi";
import { InstitutionService } from "../services/institution-service";

// This resolver retrieves books from the "institutions" array above.
@Authorized()
@Resolver()
export class InstitutionResolver {
  constructor(
    private readonly institutionService = Container.get(InstitutionService)
  ) {}

  @Query(() => [Institution])
  async getInstitutions(@Ctx() { user }: Context): Promise<any> {
    return this.institutionService.getInstitutions(user);
  }

  @Mutation(() => Institution)
  async createInstitution(
    @Arg("data") data: InstitutionInput,
    @Ctx() { user }: Context
  ): Promise<any> {
    return this.institutionService.createInstitution(data, user);
  }
}
