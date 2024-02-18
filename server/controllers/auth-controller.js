import { UserModel } from "../models/index.js";
import bcryptjs from "bcryptjs";

const authController = {
  // Sign Up
  async signup(req, res) {
    const { username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 10);
    const user = new UserModel({ username, email, password: hashedPassword });
    try {
      await user.save();
      res.status(201).json({
        message: "Sign Up Successful",
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

export default authController;
