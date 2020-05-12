import express from 'express';
import { Authentication } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate } = middleware;

const {
  signUpUser, updatePassword, signInUser, forgotPassword
} = Authentication;

const router = express.Router();

router.post('/signup', validate('signUp'), signUpUser);
router.put('/updatepassword', Authenticate.verifyToken, validate('updatePassword'), updatePassword);
router.post('/signin', validate('signIn'), signInUser);
router.post('/forgotpassword', validate('validateEmail'), forgotPassword);


export default router;
