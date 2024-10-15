import mongoose from "mongoose";

async function connect() {
  const { MONGO_URI } = process.env;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  // const uri =
  //   process.env.MONGO_URI || "mongodb://localhost:27017/credit_recovery_system";
  await mongoose.connect(MONGO_URI);
}

export { connect };

export async function disconnect() {
  await mongoose.disconnect();
}
