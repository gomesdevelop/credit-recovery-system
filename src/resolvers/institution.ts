// Resolvers define how to fetch the types defined in your schema.

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Institution } from "../defs/institution";
import InstitutionModel from "../models/institution";
import { InstitutionInput } from "../defs/institution-input";

// This resolver retrieves books from the "institutions" array above.
@Resolver()
export class InstitutionResolver {
  @Query(() => [Institution])
  async institutions(): Promise<any> {
    return Promise.resolve(InstitutionModel.find());
  }
  @Mutation(() => Institution)
  async createInstitution(@Arg("data") data: InstitutionInput): Promise<any> {
    const newInstitution = new InstitutionModel(data);
    const response = await newInstitution.save();

    return new Promise((resolve) => resolve(response));
  }
}
