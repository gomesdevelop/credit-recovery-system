import mongoose from "mongoose";

export class Mongo {
  constructor() {}

  async connect() {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI);
  }

  async disconnect() {
    await mongoose.disconnect();
  }
}
