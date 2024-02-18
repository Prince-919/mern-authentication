import express from "express";
import { PORT } from "./config/index.js";
import dbConnect from "./config/db/database.js";
import routes from "./routes/index.js";

const app = express();

// routes
app.use("/api/v1", routes);

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

app.get("/", (req, res) => {
  res.json({
    message: "API is working🚀🚀🚀",
  });
});
