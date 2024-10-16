import { Service } from "typedi";
import CaseModel from "../models/case";
import { CaseInput } from "../defs/inputs/case-input";

@Service()
export class CaseService {
  async getCases(): Promise<any> {
    return Promise.resolve(
      CaseModel.find().populate("institution").populate("customer")
    );
  }

  async createCase(value: CaseInput): Promise<any> {
    const { customerId, institutionId, ...rest } = value;

    const newCase = new CaseModel({
      ...rest,
      institution: { _id: institutionId },
      customer: { _id: customerId },
    });
    const response = await newCase.save();

    return Promise.resolve(response);
  }
}
