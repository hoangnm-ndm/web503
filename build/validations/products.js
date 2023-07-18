"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productValidator = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productValidator = exports.productValidator = _joi2.default.object({
  name: _joi2.default.string().required(),
  price: _joi2.default.number().required(),
  desc: _joi2.default.string()
});