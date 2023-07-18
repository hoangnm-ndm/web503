"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.getDetail = exports.getAll = undefined;

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _products = require("../validations/products");

var _Product = require("../models/Product");

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

var API_URL = process.env.API_URL;
var getAll = exports.getAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product2.default.find();

          case 3:
            data = _context.sent;

            if (!(!data || data.length === 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Không tìm thấy sản phẩm"
            }));

          case 6:
            return _context.abrupt("return", res.status(200).json({
              message: "Hiển thị danh sách sản phẩm thành công!",
              datas: data
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t0.message
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 9]]);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getDetail = exports.getDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            // const { data } = await axios.get(`${API_URL}/products/${id}`);

            _context2.next = 4;
            return _Product2.default.findById(id);

          case 4:
            data = _context2.sent;

            if (data) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Không tìm thấy sản phẩm"
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json({
              message: "Hiển thị chi tiết sản phẩm thành công!",
              datas: data
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              message: _context2.t0.message
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 10]]);
  }));

  return function getDetail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var create = exports.create = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, _productValidator$val, error, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            body = req.body;
            _productValidator$val = _products.productValidator.validate(body), error = _productValidator$val.error;

            if (!(error && error.details[0].message)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: error.details[0].message
            }));

          case 5:
            _context3.next = 7;
            return _Product2.default.create(body);

          case 7:
            data = _context3.sent;

            if (data) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Thêm mới sản phẩm không thành công"
            }));

          case 10:
            return _context3.abrupt("return", res.status(200).json({
              message: "Thêm mới sản phẩm thành công!",
              datas: data
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 13]]);
  }));

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = exports.update = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, body, _productValidator$val2, error, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            body = req.body;
            _productValidator$val2 = _products.productValidator.validate(req.body), error = _productValidator$val2.error;

            if (!error) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: error.details[0].message || "Please re-check your product"
            }));

          case 6:
            _context4.next = 8;
            return _Product2.default.findByIdAndUpdate(id, body, { new: true });

          case 8:
            data = _context4.sent;

            if (data) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Cập nhật sản phẩm không thành công"
            }));

          case 11:
            return _context4.abrupt("return", res.status(200).json({
              message: "Cập nhật sản phẩm thành công!",
              datas: data
            }));

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              message: _context4.t0.message
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 14]]);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var remove = exports.remove = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            // const { status } = await axios.delete(`${API_URL}/products/${id}`);

            _context5.next = 4;
            return _Product2.default.findByIdAndDelete(id);

          case 4:
            data = _context5.sent;

            if (data) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Xoá sản phẩm không thành công!"
            }));

          case 7:
            return _context5.abrupt("return", res.status(200).json({
              message: "Xoá sản phẩm thành công!"
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              message: _context5.t0.message
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 10]]);
  }));

  return function remove(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();