import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
});

export const Product = mongoose.model("Product", productSchema);
