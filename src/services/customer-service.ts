import { Service } from "typedi";
import CustomerModel from "../models/customer";
import { CustomerInput } from "../defs/inputs/customer-input";

@Service()
export class CustomerService {
  async getCustomers(owner: User | null): Promise<any> {
    return Promise.resolve(
      CustomerModel.where({ owner_id: owner?.sub }).populate("institution")
    );
  }

  async createCustomer(value: CustomerInput, owner: User | null): Promise<any> {
    const { institution, ...rest } = value;

    const newCustomer = new CustomerModel({
      ...rest,
      institution: { _id: institution.id },
      owner_id: owner?.sub,
    });
    const response = await newCustomer.save();

    return Promise.resolve(response);
  }
}
