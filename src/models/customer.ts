import mongoose, { Schema } from "mongoose";
import { ContactSchema } from "./contact";
import { CustomerType } from "../enuns/customer-type";

export const CustomerSchema = new Schema({
  owner_id: { type: String },
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  name: String,
  document: String,
  type: {
    type: String,
    enum: CustomerType,
    default: CustomerType.INDIVIDUAL,
  },
  dateOfBirth: Date,
  contacts: [ContactSchema],
  creditScore: String,
  riskProfile: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Customer", CustomerSchema);
