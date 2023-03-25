import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model("Product", productSchema);
