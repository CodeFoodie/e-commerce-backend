"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authentication = _interopRequireDefault(require("./api/authentication"));

var _product = _interopRequireDefault(require("./api/product"));

var _cart = _interopRequireDefault(require("./api/cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.Router();
router.use('/users', _authentication.default);
router.use('/product', _product.default);
router.use('/cart', _cart.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map