import mongoose from "mongoose";

const DB = process.env.MONGO_DB as string;

export const connectToDatabase = async () => {
  const dbClient = await mongoose.connect(DB);

  return dbClient;
};