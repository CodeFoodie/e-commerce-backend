"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _welcome = _interopRequireDefault(require("./welcome"));

var _passwordRecovery = _interopRequireDefault(require("./passwordRecovery"));

var _makeOrder = _interopRequireDefault(require("./makeOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  welcome: _welcome.default,
  passwordRecovery: _passwordRecovery.default,
  makeOrder: _makeOrder.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map