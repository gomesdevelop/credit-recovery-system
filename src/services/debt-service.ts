import { Service } from "typedi";
import DebtModel from "../models/debt";
import { DebtInput } from "../defs/inputs/debt-input";

@Service()
export class DebtService {
  async getDebts(owner: User | null): Promise<any> {
    return Promise.resolve(
      DebtModel.where({ owner_id: owner?.sub })
        .populate("institution")
        .populate("customer")
    );
  }

  async createDebt(value: DebtInput, owner: User | null): Promise<any> {
    const { customer, institution, ...rest } = value;

    const newDebt = new DebtModel({
      ...rest,
      institution: { _id: institution.id },
      customer: { _id: customer.id },
      owner_id: owner?.sub,
    });
    const response = await newDebt.save();

    return Promise.resolve(response);
  }
}
