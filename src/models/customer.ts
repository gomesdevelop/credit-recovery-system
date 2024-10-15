import mongoose, { Schema } from "mongoose";
import { Contact } from "../defs/contact";
import { ContactSchema } from "./contact";
import { CustomerType } from "../defs/customer";

export const CustomerSchema = new Schema({
  name: String,
  institution: { type: mongoose.Types.ObjectId, ref: "Institution" },
  type: {
    type: String,
    enum: CustomerType,
    default: CustomerType.INDIVIDUAL,
  },
  dateOfBirth: Date,
  contacts: [ContactSchema],
  creditScore: String,
  riskProfile: [String],
});

export default mongoose.model("Customer", CustomerSchema);
