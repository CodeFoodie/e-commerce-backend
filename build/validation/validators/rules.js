"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCart = exports.addProduct = exports.signIn = exports.updatePassword = exports.signUp = exports.validateEmail = void 0;

var _expressValidator = require("express-validator");

var _validatePhoneNumberNodeJs = _interopRequireDefault(require("validate-phone-number-node-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import statesInNigeria from './NigerianStates';
// add validation rules here.

/* regex description
the regex /^[A-Za-z\-']{2,250}$/
is made up of a single character set, between
[], with a quantifier {2,250}
A-Za-z => matches upper and lowercase alphabets
\-' => matches a - and a '
the last {2,250} is a quantifier specifying that the character been matched
should be > 1 and <= 250
the ^ and $ runs the match from the beginning and end of the string
*/
const nameRegex = /^[A-Za-z\-']{2,20}$/;

const checkEmail = (input, message) => (0, _expressValidator.body)(input).not().isEmpty().isEmail().withMessage(message);

const validateEmail = [checkEmail('email', 'Please provide a valid email')];
exports.validateEmail = validateEmail;
const signUp = [(0, _expressValidator.body)('email', 'Please provide a valid email').isEmail().not().isEmpty(), (0, _expressValidator.body)('mobile_number').custom(value => {
  if (_validatePhoneNumberNodeJs.default.validate(value) !== true) {
    throw new Error('Invalid mobile number');
  }

  return true;
}), (0, _expressValidator.body)('first_name', 'First name should be alphabets between 2 and 20 characters').matches(nameRegex).trim(), (0, _expressValidator.body)('last_name', 'Last name should be alphabets between 2 and 20 characters').matches(nameRegex).trim()];
exports.signUp = signUp;
const updatePassword = [(0, _expressValidator.body)('password', 'password should be at least 6 characters').isLength({
  min: 6
}), (0, _expressValidator.body)('confirmPassword').custom((value, {
  req
}) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match');
  }

  return true;
})];
exports.updatePassword = updatePassword;
const signIn = [(0, _expressValidator.body)('email', 'email is invalid, please provide a valid mail').isEmail().not().isEmpty(), (0, _expressValidator.body)('password', 'password should be at least 6 characters').isLength({
  min: 6
}).not().isEmpty()];
exports.signIn = signIn;
const addProduct = [(0, _expressValidator.body)('image_url', 'Please provide a valid image url').isURL(), (0, _expressValidator.body)('price', 'Price should be a valid numeric value').isInt().not().isEmpty(), (0, _expressValidator.body)('description', 'Please provide a comprehensive description').isLength({
  min: 6
}).not().isEmpty()];
exports.addProduct = addProduct;
const addCart = [(0, _expressValidator.body)('user_id', 'Please provide a valid user').isInt().not().isEmpty(), (0, _expressValidator.body)('items', 'Please provide valid list of items').isArray().not().isEmpty(), (0, _expressValidator.body)('subtotal', 'Please provide a valid numeric value').isInt().not().isEmpty(), (0, _expressValidator.body)('shipping', 'Please provide shiiping preference').isBoolean().not().isEmpty(), (0, _expressValidator.body)('total', 'Please provide a valid numeric value').isInt().not().isEmpty(), (0, _expressValidator.body)('shipping_address', 'Please provide a comprehensive shipping address').isLength({
  min: 6
}).not().isEmpty()];
exports.addCart = addCart;
//# sourceMappingURL=rules.js.map