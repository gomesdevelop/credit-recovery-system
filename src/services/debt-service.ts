import { Service } from "typedi";
import DebtModel from "../models/debt";
import { DebtInput } from "../defs/inputs/debt-input";

@Service()
export class DebtService {
  async getDebts(): Promise<any> {
    return Promise.resolve(
      DebtModel.find().populate("institution").populate("customer")
    );
  }

  async createDebt(value: DebtInput): Promise<any> {
    const { customerId, institutionId, ...rest } = value;

    const newDebt = new DebtModel({
      ...rest,
      institution: { _id: institutionId.id },
      customer: { _id: customerId.id },
    });
    const response = await newDebt.save();

    return Promise.resolve(response);
  }
}