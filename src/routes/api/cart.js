import express from 'express';
import { Cart } from '../../controllers';
import middleware from '../../middlewares';

const { validate, cloudUpload } = middleware;

const { attachFile } = cloudUpload;

const { addCart, getCartById } = Cart;

const router = express.Router();

router.post('/add', attachFile.single('image_file'), addCart);
router.get('/get/:id', getCartById);

export default router;
