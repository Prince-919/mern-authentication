import express from "express";
import { PORT } from "./config/index.js";
import dbConnect from "./config/db/database.js";

const app = express();

const serverStart = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverStart();
