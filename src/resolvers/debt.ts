// Resolvers define how to fetch the types defined in your schema.

import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Debt } from "../defs/debt";
import Container from "typedi";
import { DebtService } from "../services/debt-service";
import { DebtInput } from "../defs/inputs/debt-input";

@Resolver(Debt)
export class DebtResolver {
  constructor(private readonly service = Container.get(DebtService)) {}

  @Query(() => [Debt])
  async getDebts(@Ctx() { user }: Context): Promise<Debt[]> {
    return new Promise((resolve) => resolve(this.service.getDebts(user)));
  }

  @Mutation(() => Debt)
  async createDebt(
    @Arg("data") data: DebtInput,
    @Ctx() { user }: Context
  ): Promise<any> {
    return this.service.createDebt(data, user);
  }
}
