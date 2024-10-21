import { Service } from "typedi";
import CaseModel from "../models/case";
import { CaseInput } from "../defs/inputs/case-input";

@Service()
export class CaseService {
  async getCases(owner: User | null): Promise<any> {
    return Promise.resolve(
      await CaseModel.where({ owner_id: owner?.sub })
        .populate("institution")
        .populate("customer")
        .populate("debts")
    );
  }

  async createCase(value: CaseInput, owner: User | null): Promise<any> {
    const { customer, institution, debts, ...rest } = value;

    const newCase = new CaseModel({
      ...rest,
      institution: { _id: institution.id },
      customer: { _id: customer.id },
      debts: debts.map((input) => ({ _id: input.id })),
      owner_id: owner?.sub,
    });
    const response = await newCase.save();

    return Promise.resolve(response);
  }
}
