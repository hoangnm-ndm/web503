import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Category", categorySchema);

/** coolmate.com/quan-bo
 * zara.vn/thoi-trang-nu/d
 */
