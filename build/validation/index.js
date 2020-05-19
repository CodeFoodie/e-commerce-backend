"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rules = require("./validators/rules");

const getValidator = validationName => {
  const rules = {
    validateEmail: _rules.validateEmail,
    updatePassword: _rules.updatePassword,
    signIn: _rules.signIn,
    signUp: _rules.signUp,
    addProduct: _rules.addProduct
  };
  return rules[validationName];
};

var _default = getValidator;
exports.default = _default;
//# sourceMappingURL=index.js.map