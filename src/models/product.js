import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     require: true,
//     minLength: 3,
//   },
//   price: {
//     type: Number,
//   },
// });

// export default mongoose.model("Product", productSchema);

const productSchema = new mongoose.Schema({ name: String, price: Number });

export default mongoose.model("Product", productSchema);
