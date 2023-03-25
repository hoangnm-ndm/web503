import User from "../models/user.js";
import { signupSchema } from "../schemas/auth.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const { error } = signupSchema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    user.password = undefined;
    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {}
};
