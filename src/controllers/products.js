import Product from "../models/Product";

export const getAllProduct = async (req, res) => {
  try {
    // const { data } = await axios.get("http://localhost:3000/products");

    const data = await Product.find();
    if (!data || data.length === 0) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Loi khi truy cap danh sach san pham");
    }

    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};

export const findProduct = async (req, res) => {
  try {
    console.log(req.query);
    const { name } = req.query;
    console.log(name);
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { price, name } = req.query;
    // const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    const data = await Product.findById(id);
    // const data = await Product.find({ _id: id });
    // const data = await Product.find({ name: name });
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    // const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const body = req.body;
    // const { data } = await axios.post(`http://localhost:3000/products`, body);

    const data = await Product.create(body);
    console.log(data);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    // const { data } = await axios.put(
    //   `http://localhost:3000/products/${id}`,
    //   body
    // );
    const data = await Product.findByIdAndUpdate(id, body, { new: true });
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};
