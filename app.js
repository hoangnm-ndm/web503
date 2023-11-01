import http from "http";

const app = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);
  switch (url) {
    case "/products":
      res.end(`<h1>Products Page</h1>`);
      break;
    case "/home":
      res.end(`<h1>Home Page</h1>`);
      break;
  }
});

app.listen(8000, () => {
  console.log(`Server is running on PORT 8000`);
});
