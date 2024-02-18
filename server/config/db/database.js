import mongoose from "mongoose";
import { MONGODB_URI } from "../index.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
