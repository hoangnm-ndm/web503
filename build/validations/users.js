"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUpValidator = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUpValidator = exports.signUpValidator = _joi2.default.object({
    userName: _joi2.default.string().required().messages({
        "string.empty": "Tên không được để trống!",
        "any.required": "Trường \"name\" là bắt buộc!"
    }),
    email: _joi2.default.string().email().required().messages({
        "string.empty": "Email không được để trống!",
        "any.required": "Trường \"Email\" là bắt buộc!",
        "string.email": "Email không đúng định dạng!"
    }),
    password: _joi2.default.string().required().min(6).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"Password\" là bắt buộc!",
        "string.min": "Password phải có ít nhất 6 ký tự!"
    }),
    confirmPassword: _joi2.default.string().required().valid(_joi2.default.ref("password")).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"Password\" là bắt buộc!",
        "any.only": "Mật khẩu nhập lại không khớp!"
    })
});