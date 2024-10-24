import mongoose, { Schema } from "mongoose";
import { Priority } from "../enuns/priority";
import { Status } from "../enuns/status";

export const CaseSchema = new Schema({
  owner_id: { type: String },
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  customer: { type: mongoose.Types.ObjectId, ref: "Customer" },
  debts: { type: [mongoose.Types.ObjectId], ref: "Debt" },
  status: { type: String, enum: Status, default: Status.OPEN },
  priority: { type: String, enum: Priority, default: Priority.LOW },
  assignedAgent: String,
  closedAt: { type: Date, require: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Case", CaseSchema);

// payments?: Payment[];
// communications: Communication[];
