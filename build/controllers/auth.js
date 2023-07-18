"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUp = undefined;

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require("../models/User");

var _User2 = _interopRequireDefault(_User);

var _users = require("../validations/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var signUp = exports.signUp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _signUpValidator$vali, error, errors, userExist, hashedPassword, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _signUpValidator$vali = _users.signUpValidator.validate(req.body, { abortEarly: false }), error = _signUpValidator$vali.error;

                        if (!error) {
                            _context.next = 5;
                            break;
                        }

                        errors = error.details.map(function (err) {
                            return err.message;
                        });
                        return _context.abrupt("return", res.status(400).json({
                            message: errors
                        }));

                    case 5:
                        _context.next = 7;
                        return _User2.default.findOne({ email: req.body.email });

                    case 7:
                        userExist = _context.sent;

                        if (!userExist) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt("return", res.status(400).json({
                            message: "Email này đã tồn tại!"
                        }));

                    case 10:
                        _context.next = 12;
                        return _bcrypt2.default.hash(req.body.password, 10);

                    case 12:
                        hashedPassword = _context.sent;
                        _context.next = 15;
                        return _User2.default.create({
                            userName: req.body.userName,
                            email: req.body.email,
                            password: hashedPassword
                        });

                    case 15:
                        user = _context.sent;


                        user.password = undefined;

                        return _context.abrupt("return", res.status(200).json({
                            message: "Đăng ký thành công!",
                            user: user
                        }));

                    case 20:
                        _context.prev = 20;
                        _context.t0 = _context["catch"](0);
                        return _context.abrupt("return", res.status(500).json({
                            message: "Error: " + _context.t0.message
                        }));

                    case 23:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 20]]);
    }));

    return function signUp(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();