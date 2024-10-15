import { Service } from "typedi";
import CustomerModel from "../models/customer";
import { CustomerInput } from "../defs/customer-input";

@Service()
export class CustomerService {
  async getCustomers(): Promise<any> {
    return Promise.resolve(CustomerModel.find().populate("institution"));
  }

  async createCustomer(value: CustomerInput): Promise<any> {
    const { institutionId, ...rest } = value;

    const newCustomer = new CustomerModel({
      ...rest,
      institution: { _id: institutionId },
    });
    const response = await newCustomer.save();

    return Promise.resolve(response.populate("institution"));
  }
}
