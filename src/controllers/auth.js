/**
 * Với signup
 * B1: Validate req.body với Joi
 * B2: Lấy từ req.body ra name, email, password.
 * B3: Kiển tra xem email này đã tồn tại trong db hay chưa?
 * B4: Mã hoá với bcryptjs
 * B5: Lưu user vào DB
 * B6: Gán password = undefined.
 * B7: Trả về message, accessToken và user cho người dùng
 *
 * Với signin:
 * B1: Validate req.body
 * B2: Lấy email và password ra lần lượt kiểm tra từng giá trị.
 * B3: Nếu đúng cả password và email -> tạo ra ra token.
 * B4: Gán password = undefined trước khi trả dữ liệu cho người dùng.
 */
