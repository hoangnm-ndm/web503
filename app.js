import bodyParser from "body-parser";
import routes from "./routes";
import express from "express";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
