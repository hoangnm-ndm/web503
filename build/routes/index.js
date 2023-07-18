"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _product = require("./product");

var _product2 = _interopRequireDefault(_product);

var _auth = require("./auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use("/products", _product2.default);
router.use("/auth", _auth2.default);

exports.default = router;