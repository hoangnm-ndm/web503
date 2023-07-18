import express from "express";
import { mongoose } from "mongoose";
import router from "./routes";
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://hoangnm62:w2k1KNGagVMMIlwJ@cluster0.pfmupjv.mongodb.net/web69");


app.use("/api", router);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
