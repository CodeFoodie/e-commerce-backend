"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate"));

var _authenticate = _interopRequireDefault(require("./authenticate"));

var _cloudupload = _interopRequireDefault(require("./cloudupload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  validate: _validate.default,
  Authenticate: _authenticate.default,
  cloudUpload: _cloudupload.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map