import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_CODE } = process.env;
export const checkPermision = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const jwtVerify = jwt.verify(token, SECRET_CODE, function (err, decoded) {
      if (err) {
        console.log("err: ", err);
      }
    });

    console.log(jwtVerify);
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};
