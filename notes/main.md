# Day 1:

## Lý thuyết:

- Giới thiệu mô hình client-server
- Tại sao chọn MERN Stack.

## Thực hành:

- Cài đặt và thực hiện một số câu lệnh đơn giản với nodejs
- Giới thiệu NPM
- Giới thiệu, cài đặt và sử dụng NVM
- Tạo request đầu tiên với http.ClientRequest
- Giới thiệu, cài đặt và biết cách dùng cơ bản postman (hoặc Thunder client)

# Day 2:

## Lý thuyết:

- ExpressJS: Khái niệm, tính năng, ưu điểm, cài đặt và sử dụng cơ bản.
- Giới thiệu 2 đối tượng request, response và các thành phần quan trọng của chúng(path, Method, params, body, query, status…)
- Giới thiệu về http request method -> khái niệm CRUD

## Thực hành:

- Xây dựng CRUD với ExpressJS (dữ liệu đơn giản)

# Day 3:

## Lý thuyết:

- Làm quen và fake database với json-server
- Nhắc lại về kiến thức về bất đồng bộ trong Javascript
- CRUD với json-server

## Thực hành:

- Xây dựng và tét thành công các tính năng xem danh sách, xem chi tiết, thêm, sửa, xoá dữ liệu.
- Handler error

# Day 4:

## Lý thuyết:

- Giới thiệu MongoDB (lịch sử, tính phổ biến, sự khác biệt giữa SQL và NoSQL)
- Cài đặt MongoDB và MongoDB Compass
- Chia sẻ một số câu lệnh truy vấn với mongosh
- Cài đặt và sử dụng thư viện mongoose để kết nối và thao tác MongoDB với Nodejs

## Thực hành:

- CRUD với dữ liệu trong MongoDB
- Biết cách tạo schema, model hoá các thực thể(sản phẩm, danh mục, bài báo, comment, users…)

# Day 5:

## Lý thuyết:

- GIới thiệu mô hình MVC (khái niệm, minh hoạ, ưu điểm, các cách triển khai trong thực tế)
- Giới thiệu tính năng định tuyến (routing) của Express

## Thực hành:

- Refactor toàn bộ dự án theo mô hình MVC
- Triển khai CRUD với một số thực thể vệ tinh (ví dụ trước đây đã CRUD với products thì giờ CRUD với categories, users, comments…)

# Day 6:

## Lý thuyết:

- Hiểu được quan hệ giữa các thực thể trong business model
- Nhắc lại quan hệ giữa các thực thể: one-one, one-many, many-many
- Giới thiệu và lựa chọn công cụ để xử lý.

## Thực hành:

- Demo code với các request: hiển thị sản phẩm theo từng danh mục, hiển thị danh mục đi theo mỗi sản phẩm (hoặc hiển thị danh sách bạn bè theo từng user…)

# Day 7: Ôn tập và kiểm tra.

- Nội dung kiểm tra: CRUD với mongodb có nâng cao: hiển thị sản phẩm theo danh mục

# Day 8: Ôn tập và kiểm tra.

- Nội dung kiểm tra: CRUD với mongodb có nâng cao: hiển thị sản phẩm theo danh mục

# Day 9:

## Lý thuyết:

- Khái niệm Authorization và Authentication
- Nêu lý do tại sao cần xác thực và phân quyền, ví dụ một số hệ thống thực tế.

## Thực hành:

- Hoàn thiện demo đăng ký, đăng nhập.

# Day 10:

## Lý thuyết:

- Giới thiệu khái niệm middleware
- Một số middleware dựng sẵn phổ biến và cách dùng
- Tự viết middleware với expressjs
- Mã hoá password (tại sao cần mã hoá, các kiểu mã hoá)
- Biến môi trường (khái niệm, tại sao cần sử dụng)

## Thực hành:

- Xây dựng middleware để phân quyền người dùng.
- Mã hoá password cho người dùng đăng ký mới và giải mã hoá với người dùng đăng nhập
- Cài đặt và sử dụng biến môi trường

# Day 11:

## Lý thuyết:

- Token: Khái niệm, một số loại phổ biến (JWT, OTP...), cách triển khai.

## Thực hành:

- Sử dụng jsonwebtoken cho hệ thống.
- Demo code: gửi đi và lưu trữ token (có thể lưu vào localstorage)
- Refresh token

# Day 12:

## Lý thuyết:

- Validation phía server (đặt vấn đề, giới thiệu công cụ)
- Test và unit test cho nodejs services

## Thực hành:

- Validation với joi hoặc yup
- Unit test với mocha and chai.

# Day 13:

## Lý thuyết:

- Đặt vấn đề về việc lưu trữ media trong các hệ thống khi triển khai thực tế
- Giới thiệu dịch vụ lưu trữ cloudinary.

## Thực hành:

- Demo code thêm và xoá (1 và nhiều) media với cloundinary

# Day 14:

## Lý thuyết:

- Đặt vấn đề về việc tại sao phải phân trang, sắp xếp, lọc…
- Giới thiệu một số mô hình và phương pháp triển khai trong thực tế.

## Thực hành:

- Demo code lọc bản ghi sắp xếp bản ghi, phân trang danh sách bản ghi

# Day 15:

## Lý thuyết:

- Các vấn đề khi triển khai kết nối với frontend
- Một số công cụ viết mô tả API
- CORS: Khái niệm, cách thức triển khai
- Mongodb Atlas: Giới thiệu, đăng ký, triển khai

## Thực hành:

- Fix lỗi CORS khi kết nối với front-end
- Đăng ký và cấu hình, chuyển Database từ local lên Mongo Atlas
- Deploy nodejs server với render.com

# Day 16: Ôn tập và kiểm tra (nội dung kiểm tra)

- CRUD với mongodb
- Đăng ký, đăng nhập

# Day 17: Hoàn thiện điểm và mở rộng phần kiến thức nâng cao.

- Demo sử dụng typescript trong nodejs.
- Demo kết nối nodejs services và một frontend single page app.
