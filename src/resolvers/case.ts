// Resolvers define how to fetch the types defined in your schema.

import { Query, Resolver } from "type-graphql";
import { Case } from "../defs/case";
import { cases } from "../../data";

@Resolver(Case)
export class CaseResolver {
  @Query((returns) => [Case])
  async cases(): Promise<Case[]> {
    return new Promise((resolve) => resolve(cases));
  }
}
