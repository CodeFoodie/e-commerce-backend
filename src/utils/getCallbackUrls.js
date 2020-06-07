import { config } from 'dotenv';

config();
const environment = process.env.NODE_ENV;
const testEnvironment = !(environment === 'development' || environment === 'staging' || environment === 'production');
const productionEnvironment = (environment === 'production') || (environment === 'staging');
let baseUrl;

if (productionEnvironment) baseUrl = 'https://dbullssquad-frontend.herokuapp.com';
else baseUrl = 'http://localhost:5000';

const googleCallbackUrl = `${baseUrl}/auth/google/callback`;
const facebookCallbackUrl = `${baseUrl}/auth/facebook/callback`;

export default {
  baseUrl,
  testEnvironment,
  googleCallbackUrl,
  facebookCallbackUrl
};
