import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  price: Number,
  description: String,
});

export default mongoose.model("Product", productSchema);
