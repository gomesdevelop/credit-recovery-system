// Resolvers define how to fetch the types defined in your schema.

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Institution } from "../defs/institution";
import InstitutionModel from "../models/institution";
import { InstitutionInput } from "../defs/institution-input";
import Container from "typedi";
import { InstitutionService } from "../services/institution-service";

// This resolver retrieves books from the "institutions" array above.
@Resolver()
export class InstitutionResolver {
  constructor(
    private readonly institutionService = Container.get(InstitutionService)
  ) {}

  @Query(() => [Institution])
  async getInstitutions(): Promise<any> {
    return this.institutionService.getInstitutions();
  }

  @Mutation(() => Institution)
  async createInstitution(@Arg("data") data: InstitutionInput): Promise<any> {
    return this.institutionService.createInstitution(data);
  }
}
