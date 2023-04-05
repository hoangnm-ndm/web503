import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: "member",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
