import { Service } from "typedi";
import InstitutionModel from "../models/institution";
import { InstitutionInput } from "../defs/inputs/institution-input";

@Service()
export class InstitutionService {
  async getInstitutions(owner: User | null): Promise<any> {
    return Promise.resolve(InstitutionModel.where({ owner_id: owner?.sub }));
  }

  async createInstitution(
    value: InstitutionInput,
    onwer: User | null
  ): Promise<any> {
    const newInstitution = new InstitutionModel({
      ...value,
      owner_id: onwer?.sub,
    });
    const response = await newInstitution.save();

    return Promise.resolve(response);
  }
}
