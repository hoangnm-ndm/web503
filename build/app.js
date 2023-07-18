"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
_mongoose.mongoose.connect("mongodb+srv://hoangnm62:w2k1KNGagVMMIlwJ@cluster0.pfmupjv.mongodb.net/web69");

app.use("/api", _routes2.default);

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});