import { Service } from "typedi";
import InstitutionModel from "../models/institution";
import { InstitutionInput } from "../defs/institution-input";

@Service()
export class InstitutionService {
  async getInstitutions(): Promise<any> {
    return Promise.resolve(InstitutionModel.find());
  }

  async createInstitution(value: InstitutionInput): Promise<any> {
    const newInstitution = new InstitutionModel(value);
    const response = await newInstitution.save();

    return Promise.resolve(response);
  }
}
