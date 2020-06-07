import { body } from 'express-validator';
import validatePhoneNumber from 'validate-phone-number-node-js';
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

const checkEmail = (input, message) => body(input)
  .not()
  .isEmpty()
  .isEmail()
  .withMessage(message);

export const validateEmail = [
  checkEmail('email', 'Please provide a valid email')
];

export const signUp = [
  body('email', 'Please provide a valid email')
    .isEmail()
    .not()
    .isEmpty(),
  body('mobile_number').custom((value) => {
    if (validatePhoneNumber.validate(value) !== true) {
      throw new Error('Invalid mobile number');
    }
    return true;
  }),
  body('first_name', 'First name should be alphabets between 2 and 20 characters')
    .matches(nameRegex)
    .trim(),
  body('last_name', 'Last name should be alphabets between 2 and 20 characters')
    .matches(nameRegex)
    .trim(),
];

export const updatePassword = [
  body('password', 'password should be at least 6 characters').isLength({ min: 6 }),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match');
    }
    return true;
  })
];

export const signIn = [
  body('email', 'email is invalid, please provide a valid mail')
    .isEmail()
    .not()
    .isEmpty(),
  body('password', 'password should be at least 6 characters')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
];

export const addProduct = [
  body('image_file').custom((value, { req }) => {
    const image = req.file;
    if (!image.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      throw new Error('Acepted image format only: jpg, jpeg, png, gif');
    }
    return true;
  }),
  body('price', 'Price should be a valid numeric value')
    .isInt()
    .not()
    .isEmpty(),
  body('description', 'Please provide a comprehensive description')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
];

export const addCart = [
  body('image_file', 'Acepted image format only: jpg, jpeg, png, gif').custom((value, { req }) => {
    const image = req.file;
    if (image && !image.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      throw new Error('Acepted image format only: jpg, jpeg, png, gif');
    }
    return true;
  }),
  body('user_id', 'Please provide a valid user')
    .isInt()
    .not()
    .isEmpty(),
  body('items', 'Please provide a JSON.stringify array of cart items')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
  body('subtotal', 'Please provide a valid numeric value')
    .isInt()
    .not()
    .isEmpty(),
  body('total', 'Please provide a valid numeric value')
    .isInt()
    .not()
    .isEmpty(),
  body('shipping_address', 'Please provide a comprehensive shipping address')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
];
