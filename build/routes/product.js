"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _products = require("../controllers/products");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productRouter = _express2.default.Router();

productRouter.get("/", _products.getAll);
productRouter.get("/:id", _products.getDetail);
productRouter.post("/", _products.create);
productRouter.put("/:id", _products.update);
productRouter.delete("/", _products.remove);

exports.default = productRouter;