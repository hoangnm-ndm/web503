// const http = require("node:http");
import express from 'express'
import router from './routes/product'
const app = express()
const port = 8000

app.use(express.json())

app.use("/", router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Create a local server to receive data from
// const app = http.createServer((req, res) => {
//   const { url, method} = req
//   switch (url) {
//     case "/products":
//       res.writeHead(200);
//       res.end(
//         `<h1>Products Page!</h1>`
//       );
//       break;
//     case "/detail":
//       res.end(
//         `<h1>Product detail page</h1>`
//       )

//   }
  
// });

// app.listen(8000, () => {
//   console.log("Server đang chạy trên PORT 8000");
// });
