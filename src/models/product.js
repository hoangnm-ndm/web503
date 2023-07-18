import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: Number,
  desc: String,
}, { timestamps: true, versionKey: false });

export default mongoose.model("Product", productSchema);
