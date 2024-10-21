import { Service } from "typedi";
import WorkflowModel from "../models/workflow";
import { WorkflowInput } from "../defs/inputs/workflow-input";

@Service()
export class WorkflowService {
  async getWorkflows(owner: User | null): Promise<any> {
    return Promise.resolve(
      WorkflowModel.where({ owner_id: owner?.sub }).populate("institution")
    );
  }

  async createWorkflow(value: WorkflowInput, owner: User | null): Promise<any> {
    const { institution, ...rest } = value;
    console.log(rest);

    const newWorkflow = new WorkflowModel({
      ...rest,
      institution: { _id: institution.id },
      owner_id: owner?.sub,
    });
    const response = await newWorkflow.save();

    return Promise.resolve(response);
  }
}
