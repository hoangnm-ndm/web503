import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
});

// const productSchema = new Schema({ name: String, price: Number });
export default mongoose.model("Product", productSchema);
