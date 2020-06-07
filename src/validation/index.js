import {
  validateEmail, updatePassword, signIn, signUp, addProduct, addCart
} from './validators/rules';
  
const getValidator = (validationName) => {
  const rules = {
    validateEmail, updatePassword, signIn, signUp, addProduct, addCart
  };
  
  return rules[validationName];
};
  
export default getValidator;
