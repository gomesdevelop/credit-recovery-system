// Resolvers define how to fetch the types defined in your schema.

import { Query, Resolver } from "type-graphql";
import { Institution } from "../defs/institution";
import { institutions } from "../../data";

// This resolver retrieves books from the "institutions" array above.
@Resolver()
export class InstitutionResolver {
  @Query(() => [Institution])
  async institutions(): Promise<Institution[]> {
    return Promise.resolve(institutions);
  }
}
