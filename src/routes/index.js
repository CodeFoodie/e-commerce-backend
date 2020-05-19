
import { Router } from 'express';
import userRoute from './api/authentication';
import ProductRoute from './api/product';

const router = new Router();
router.use('/users', userRoute);
router.use('/product', ProductRoute);

export default router;
