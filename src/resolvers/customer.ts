// Resolvers define how to fetch the types defined in your schema.

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Customer } from "../defs/customer";
import { CustomerInput } from "../defs/inputs/customer-input";
import Container from "typedi";
import { CustomerService } from "../services/customer-service";

// This resolver retrieves books from the "institutions" array above.
@Resolver(Customer)
export class CustomerResolver {
  constructor(private readonly service = Container.get(CustomerService)) {}

  @Query(() => [Customer])
  async getCustomers(): Promise<Customer[]> {
    return new Promise((resolve) => resolve(this.service.getCustomers()));
  }

  @Mutation(() => Customer)
  async createCustomer(@Arg("data") data: CustomerInput): Promise<any> {
    return this.service.createCustomer(data);
  }
}
