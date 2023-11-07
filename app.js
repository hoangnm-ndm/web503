// import http from "http";

// const app = http.createServer((req, res) => {
//   const { url, method } = req;
//   console.log({ url, method });

//   // Cach 2:
//   if (url === "/products" && method === "GET") {
//     res.end(`<div>Products Page</div>`);
//   }

//   if (url === "/products" && method === "POST") {
//     res.end(`<div>
//     <form>
//     <label>Ten san pham</label>
//     <input placeholder="Ten san pham" />
//     <button>Them</button>
//     </form>
//     </div>`);
//   }
// });

// app.listen(8000, () => {
//   console.log(`Server is running on PORT 8000`);
// });

import express from "express"; // module syntax
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.get("/shop", (req, res) => {
  res.send("Shop page!");
});

app.get("/about", (req, res) => {
  res.send("About page!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
