import { Service } from "typedi";
import CaseModel from "../models/case";
import { CaseInput } from "../defs/inputs/case-input";

@Service()
export class CaseService {
  async getCases(owner: User | null): Promise<any> {
    return Promise.resolve(
      CaseModel.where({ owner_id: owner?.sub })
        .populate("institution")
        .populate("customer")
    );
  }

  async createCase(value: CaseInput, owner: User | null): Promise<any> {
    const { customer, institution, ...rest } = value;

    const newCase = new CaseModel({
      ...rest,
      institution: { _id: institution.id },
      customer: { _id: customer.id },
      owner_id: owner?.sub,
    });
    const response = await newCase.save();

    return Promise.resolve(response);
  }
}
