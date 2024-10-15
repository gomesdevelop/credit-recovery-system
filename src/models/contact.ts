import { Schema } from "mongoose";

export const ContactSchema = new Schema({
  description: String,
  address: String,
  phone: String,
  email: String,
});
