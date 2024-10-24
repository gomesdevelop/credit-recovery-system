import mongoose, { Schema } from "mongoose";

export const WorkflowSchema = new Schema({
  owner_id: { type: String },
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  name: String,
  stages: [String],
  activesCases: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Workflow", WorkflowSchema);
