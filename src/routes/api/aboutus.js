import express from 'express';
import { AboutUs } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate } = middleware;

const {
  addAboutUs, getAboutUs
} = AboutUs;

const router = express.Router();

router.post('/add', Authenticate.verifyToken, addAboutUs);
router.get('/get', getAboutUs);

export default router;
