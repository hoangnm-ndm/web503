# 1: Khởi tạo project:

```
src - | app.js
      | controllers
      | middlewares
      | models
      | routes
      | validations
.env
```

Cài đặt các thư viện cần thiết:

```
npm i
```

# 2: Đối với Product CRUD

- B1: Tạo routerr
- B2: Tạo models
- B3: Controllers
- B4: Validation cho request Create và Update.

# 3: Đối với signUp:

- B1: Tạo model User
- B2: Tạo valid dữ liệu đăng ký
- B3: Tạo hàm controllers
- B4: Viết valid dữ liệu đăng ký
- B5: Kiểm tra email đã tồn tại chưa, chưa tồn tại -> cho đăng ký
- B6: Mã hoá password với bcryptjs.hash
- B7: Create db
- B8: Return ra thông báo, (xoá password trước khi return)

# 4: Đối với signIn:

- B1: Viết valid dữ liệu đăng nhập.
- B2: Tạo hàm controllers.
- B3: Viết valid dữ liệu đăng nhập
- B4: Kiểm tra mail có tồn tại không? -> Có tồn tại -> sang bước 5.
- B5: Kiểm tra mật khẩu bằng bcryptjs.compare()
- B6: Nếu mật khẩu đúng -> Tạo token với jsonwebtoken.sign()
- B8: Return ra thông báo, (xoá password trước khi return)

# 5: checkPermission:

- B1: Tạo function checkPermision trong folder middlewares.
- B2: Gắn middleware vào router
- B3: Kiểm tra có tồn tại token trong headers.authorization hay không?
- B4: verify token
- B5: Tìm user dựa theo token đã verify.
- B6: Kiểm tra user.role
- B7: next()
