import { getDetailProduct } from "../controllers/products";

describe("getDetailProduct", () => {
  it("should return a successful response when data is found", async () => {
    const req = {
      params: {
        id: "12345",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const Product = {
      findById: jest.fn().mockResolvedValue({ id: "12345", name: "Product 1" }),
    };

    await getDetailProduct(req, res);

    expect(Product.findById).toHaveBeenCalledWith("12345");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Lay san pham thanh cong!",
      // ...other expected response data
    });
  });

  it("should return an error response when data is not found", async () => {
    const req = {
      params: {
        id: "54321",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const Product = {
      findById: jest.fn().mockResolvedValue(null),
    };

    await getDetailProduct(req, res);

    expect(Product.findById).toHaveBeenCalledWith("54321");
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Khong tim thay san pham nao!",
    });
  });

  it("should return an error response when an exception occurs", async () => {
    const req = {
      params: {
        id: "12345",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const error = new Error("Some error");
    const Product = {
      findById: jest.fn().mockRejectedValue(error),
    };

    await getDetailProduct(req, res);

    expect(Product.findById).toHaveBeenCalledWith("12345");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      name: "Error",
      message: "Some error",
    });
  });
});
