/* eslint-disable max-len */
/* eslint-disable camelcase */
import models from '../models';
import { status, successResponse, errorResponse } from '../utils/index';
import middleWares from '../middlewares';

const { cloudUpload } = middleWares;
const { cloudinary } = cloudUpload;

/**
 * @class Product
 * @description Controllers for Product
 * @exports Product
 */
export default class Product {
  /**
   * @method addProduct
   * @description Method for adding a product
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async addProduct(req, res) {
    if (!req.user.is_admin) {
      return errorResponse(res, 401, 'You need admin privilegde');
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    if (result.secure_url) {
      req.body.image_url = result.secure_url;
    } else {
      return errorResponse(res, 500, 'Error uploading Image!, Please try again');
    }

    try {
      req.body.is_available = true;
      const product = await models.Products.create(req.body);
      const response = product.toJSON();
      return successResponse(res, status.created, 'Product added Successfully', response);
    } catch (error) {
      console.log(error);
      return errorResponse(res, status.error, 'Unable to add product, please try again');
    }
  }

  /**
  * @method getAllProducts
  * @description Method to fetch all products
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} All products details
  */
  static async getAllProducts(req, res) {
    try {
      const result = await models.Products.findAll();
      return successResponse(res, 200, 'All Products', result);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting products');
    }
  }

  /**
   * @method getProductById
   * @description Method to get a product by id
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} The product details
   */
  static async getProductById(req, res) {
    const { productId } = req.params;
    try {
      const result = await models.Product.findOne(productId);
      if (!result) {
        return errorResponse(res, 404, 'Product not found');
      }
      return successResponse(res, 200, 'Product detail', result);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting product');
    }
  }
}
