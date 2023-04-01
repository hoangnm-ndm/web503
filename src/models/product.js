import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
