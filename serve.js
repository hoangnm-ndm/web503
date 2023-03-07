const http = require("http");
const port = 8080;
const app = http.createServer(function (req, res) {
  // xu ly thong tin -> tra ve thong tin
  if (req.url === "/") {
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home Page</title>
        </head>
        <body>
          <h1>Home Page</h1>
        </body>
      </html>
      `);
  }
  if (req.url === "/contact") {
    res.end(`<h1>Contact Page</h1>`);
  }
});
app.listen(port, function () {
  console.log(`Ung dung da chay tren cong: ${port}`);
});
