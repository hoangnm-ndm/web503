import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "sale", "member"],
      default: "member",
    },
    address: String,
    phone: String,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
