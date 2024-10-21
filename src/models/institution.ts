import mongoose, { Schema } from "mongoose";
import { ContactSchema } from "./contact";

const InstitutionSchema = new Schema({
  owner_id: { type: String },
  name: String,
  contacts: [ContactSchema],
  compliances: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Institution", InstitutionSchema);
