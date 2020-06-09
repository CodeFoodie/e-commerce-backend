
import { Router } from 'express';
import userRoute from './api/authentication';
import ProductRoute from './api/product';
import CartRoute from './api/cart';
import Aboutus from './api/aboutus';

const router = new Router();
router.use('/users', userRoute);
router.use('/product', ProductRoute);
router.use('/cart', CartRoute);
router.use('/aboutus', Aboutus);

export default router;
