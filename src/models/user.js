import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  password: {
    type: String,
    require: true,
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    require: true,
    minLength: 8,
  },
});

export default mongoose.model("User", userSchema);
