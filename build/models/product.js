"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    require: true
  },
  price: Number,
  desc: String
}, { timestamps: true, versionKey: false });

exports.default = _mongoose2.default.model("Product", productSchema);