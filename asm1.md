# 1. Create base - 2đ
Hoàn thiện các router CRUD, kết nối thành công tới mongodb.

# 2: Tạo model - 1đ
Tạo model product có các thuộc tính:
```
name: string, required,
price: number, required
desc: string, required
```
# 3: CRUD - 5đ
- Thao tác thêm sản phẩm thành công.
- Thao tác get danh sách sản phẩm thành công.
- Thao tác get sản phẩm theo id thành công.
- Thao tác xoá sản phẩm thành công.
- Thao tác cập nhật sản phẩm thành công.
# 4: Validation: 2đ
- Tạo xong form validation cho product với yêu cầu: (1đ)
```
name: string, required, min 6 ký tự, max 255 ký tự
price: number, required, >=0,
desc: string, required, 
```
- Áp dụng validation với thao tác tạo mới sản phẩm. (0.5đ)
- Áp dụng validation với thao tác cập nhật sản phẩm. (0.5đ)