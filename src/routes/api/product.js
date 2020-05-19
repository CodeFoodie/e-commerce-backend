import express from 'express';
import { Product } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate } = middleware;

const {
  addProduct, getAllProducts, getProductById // , updateProduct, getProduct, deleteProduct
} = Product;

const router = express.Router();

router.post('/add', Authenticate.verifyToken, validate('addProduct'), addProduct);
router.get('/getAll', getAllProducts);
router.get('/getOne/:id', getProductById);
/*
router.put('/update', Authenticate.verifyToken, updateProduct);
router.post('/delete/:id', Authenticate.verifyToken, deleteProduct);
*/
export default router;
