import mongoose, { Schema } from "mongoose";
import { DebtType } from "../enuns/debt-type";

export const DebtSchema = new Schema({
  customer: { type: mongoose.Types.ObjectId, ref: "Customer" },
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  originalAmount: Number,
  outstandingAmount: Number,
  type: {
    type: String,
    enum: DebtType,
    default: DebtType.OTHER,
  },
  dueDate: Date,
  interestRate: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Debt", DebtSchema);
