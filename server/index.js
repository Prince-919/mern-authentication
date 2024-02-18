import express from "express";
import cors from "cors";
import { PORT } from "./config/index.js";
import dbConnect from "./config/db/database.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/index.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1", routes);

// error hanlde
app.use(errorHandler);

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
