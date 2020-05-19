import {
  validateEmail, updatePassword, signIn, signUp, addProduct
} from './validators/rules';
  
const getValidator = (validationName) => {
  const rules = {
    validateEmail, updatePassword, signIn, signUp, addProduct
  };
  
  return rules[validationName];
};
  
export default getValidator;
