import { Service } from "typedi";
import WorkflowModel from "../models/workflow";
import { WorkflowInput } from "../defs/workflow-input";

@Service()
export class WorkflowService {
  async getWorkflows(): Promise<any> {
    return Promise.resolve(WorkflowModel.find().populate("institution"));
  }

  async createWorkflow(value: WorkflowInput): Promise<any> {
    const { institutionId, ...rest } = value;
    console.log(rest);

    const newWorkflow = new WorkflowModel({
      ...rest,
      institution: { _id: institutionId },
    });
    const response = await newWorkflow.save();

    return Promise.resolve(response.populate("institution"));
  }
}