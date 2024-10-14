import mongoose from "mongoose";

async function connect() {
  const uri =
    process.env.MONGO_URI || "mongodb://localhost:27017/credit_recovery_system";
  await mongoose.connect(uri);
}

export { connect };

export async function disconnect() {
  await mongoose.disconnect();
}
