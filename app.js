const express = require("express");
const app = express();
const port = 8080;
app.get("/", () => {
  res.send(`<h1>Home Page</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});
app.get("/products", (req, res) => {
  res.send(`<h1>Products Page</h1>`);
});
app.listen(port, () => {
  console.log(`ung dung dang chay voi port: ${port}`);
});
