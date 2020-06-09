import express from 'express';
import { Product } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate, cloudUpload } = middleware;

const { attachFile } = cloudUpload;

const {
  addProduct, getAllProducts, getProductById // , updateProduct, getProduct, deleteProduct
} = Product;

const router = express.Router();

router.post('/add', Authenticate.verifyToken, attachFile.single('image_file'), validate('addProduct'), addProduct);
router.get('/getAll', getAllProducts);
router.get('/getOne/:id', getProductById);

export default router;
