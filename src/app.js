import express from "express"; // module syntax
import router from "./routes";
const app = express();
const port = 8000;

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
