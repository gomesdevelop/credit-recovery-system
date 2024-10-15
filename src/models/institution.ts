import mongoose, { Schema } from "mongoose";
import { ContactSchema } from "./contact";

const InstitutionSchema = new Schema(
  { name: String, contacts: [ContactSchema], compliances: [String] },
  {}
);

export default mongoose.model("Institution", InstitutionSchema);
