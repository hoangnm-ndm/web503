`npm i express`

- Có 3 cách truyền dữ liệu chính là: req.params, req.query, req.body:

`http://localhost:8000/products/:slug` - params
`http://localhost:8000/products?color=red` - query
```json
{
    "name": "iphone 15",
    "price": 2000
}
```

BTVN:
- Cấu hình router và code lại.
- Đọc và tìm hiểu document Express.Router()