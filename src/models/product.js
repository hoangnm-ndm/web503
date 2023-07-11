import mongoose from "mongoose";

const productSchema = {
  name: {
    type: String,
    require: true,
  },
  price: Number,
  desc: String,
};

export default mongoose.model("product", productSchema);
