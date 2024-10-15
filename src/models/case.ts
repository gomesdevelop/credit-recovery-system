import mongoose, { Schema } from "mongoose";
import { CaseStatus, CasePriority } from "../defs/case";

export const CaseSchema = new Schema({
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  customer: { type: mongoose.Types.ObjectId, ref: "Customer" },
  status: { type: String, enum: CaseStatus, default: CaseStatus.OPEN },
  priority: { type: String, enum: CasePriority, default: CasePriority.LOW },
  assignedAgent: String,
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, require: false },
});

export default mongoose.model("Case", CaseSchema);

// debts?: Debt[];
// payments?: Payment[];
// communications: Communication[];
