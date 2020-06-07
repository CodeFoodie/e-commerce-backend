"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./emailTemplates/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  welcome,
  passwordRecovery,
  makeOrder
} = _index.default;
let html;

const emailTemplatesFunction = (category, data) => {
  switch (category) {
    case 'welcome':
      html = welcome(data);
      return {
        subject: 'You are welcome',
        html
      };

    case 'passwordRecovery':
      html = passwordRecovery(data);
      return {
        subject: 'Recover your password',
        html
      };

    case 'makeOrder':
      html = makeOrder(data);
      return {
        subject: 'New order has been made!!',
        html
      };

    default:
      return false;
  }
};

var _default = emailTemplatesFunction;
exports.default = _default;
//# sourceMappingURL=emailTemplatesFunction.js.map