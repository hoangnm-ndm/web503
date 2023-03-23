import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().required().min(6),
  price: Joi.number().required(),
  description: Joi.string(),
});
// export const getAll = async (req, res) => {
//   try {
//     const { data: products } = await axios.get(
//       `${process.env.API_URI}/products`
//     );
//     if (products.length === 0) {
//       res.send({
//         messenger: "Danh sách sản phẩm trống!",
//       });
//     }
//     return res.status(200).json(products);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// };

// export const getDetail = async (req, res) => {
//   try {
//     const { data: product } = await axios.get(
//       `${process.env.API_URI}/${req.params.id}`
//     );
//     if (!product) {
//       res.send({
//         messenger: "Sản phẩm không tồn tại",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// };

export const create = async (req, res) => {
  try {
    const { value } = await productSchema.validateAsync(req.body);
    console.log(value);
    // const { data: product } = await axios.post(
    //   `${process.env.API_URI}/products/`,
    //   req.body
    // );
    // if (!product) {
    //   res.send({
    //     messenger: "Thêm sản phẩm thất bại",
    //   });
    // }
    return res.status(200).json();
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

// export const update = async (req, res) => {
//   try {
//     const { data: product } = await axios.put(
//       `${process.env.API_URI}/products/${req.params.id}`,
//       req.body
//     );
//     if (!product) {
//       res.send({
//         messenger: "Cập nhật sản phẩm thất bại",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     await axios.delete(`${process.env.API_URI}/products/${req.params.id}`);
//     return res.send({
//       messenger: "Xoá sản phẩm thành công!",
//     });
//   } catch (error) {
//     res.send({
//       messenger: error,
//     });
//   }
// };
