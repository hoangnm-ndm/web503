const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  // code lai noi dung ben server.js
  res.send(`
    <h1>Home Page</h1>
    <h2>Noi dung cua Homepage</h2>
  `);
});
app.get("/products", (req, res) => {
  // code lai noi dung ben server.js
  res.send(`
    <h1>Products Page</h1>
  `);
});

app.get("/product/:id", (req, res) => {
  res.send(
    `
    <h1>Product có id la: ${req.params.id}</h1>
    
    `
  );
});
app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
