import { Schema } from "mongoose";
import { ContactType } from "../enuns/contact-type";

export const ContactSchema = new Schema({
  type: { type: String, enum: ContactType, default: ContactType.OTHER },
  description: { type: String, require: false },
  value: String,
  createdAt: { type: Date, default: Date.now },
});
