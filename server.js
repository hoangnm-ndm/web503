const http = require("http");
const port = 8000;
const server = http.createServer(function (req, res) {
  console.log("url: ", req.url);
  console.log("method: ", req.method);
  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <h2>Noi dung cua Homepage</h2>
    `);
  }
  if (req.url === "/products") {
    res.end(`
      <h1>Products Page</h1>
    `);
  }
});
server.listen(port, () => {
  console.log(`Ung dung dang chay tren port ${port}`);
});

// Khoi tao du an: npm init -y
// Tao file server.js va khoi tao 1 server bang http.createServer
// Chay du an: node server.js

// Cai nodemon: npm install --save-dev nodemon
// Vao package.json edit script:
/**
 *"scripts": {
    "start": "nodemon server.js"
  },
 */
