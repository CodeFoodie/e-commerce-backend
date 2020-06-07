import emailTemplates from './emailTemplates/index';

const {
  welcome,
  passwordRecovery,
  makeOrder,
} = emailTemplates;

let html;
const emailTemplatesFunction = (category, data) => {
  switch (category) {
    case 'welcome':
      html = welcome(data);
      return {
        subject: 'You are welcome',
        html,
      };
    case 'passwordRecovery':
      html = passwordRecovery(data);
      return {
        subject: 'Recover your password',
        html,
      };
    case 'makeOrder':
      html = makeOrder(data);
      return {
        subject: 'New order has been made!!',
        html,
      };
    default:
      return false;
  }
};

export default emailTemplatesFunction;
