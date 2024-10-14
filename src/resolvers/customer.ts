// Resolvers define how to fetch the types defined in your schema.

import { Query, Resolver } from "type-graphql";
import { customers } from "../../data";
import { Customer } from "../defs/customer";

// This resolver retrieves books from the "institutions" array above.
@Resolver(Customer)
export class CustomerResolver {
  @Query((returns) => [Customer])
  async customers(): Promise<Customer[]> {
    return new Promise((resolve) => resolve(customers));
  }
}
