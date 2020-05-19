/* eslint-disable max-len */
/* eslint-disable camelcase */
import models from '../models';
import { status, successResponse, errorResponse } from '../utils/index';

/**
 * @class Cart
 * @description Controllers for Cart
 * @exports Cart
 */
export default class Cart {
  /**
   * @method addCart
   * @description Method for adding a product
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async addCart(req, res) {
    try {
      const cart = await models.Cart.create(req.body);
      const response = cart.toJSON();
      return successResponse(res, status.created, 'Cart added Successfully', response);
    } catch (error) {
      return errorResponse(res, status.error, 'Unable to add cart, please try again');
    }
  }

  /**
  * @method getAllCart
  * @description Method to fetch all carts
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} All Carts details
  */
  static async getAllCarts(req, res) {
    try {
      const result = await models.Cart.findAll();
      return successResponse(res, 200, 'All carts', result);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting carts');
    }
  }

  /**
   * @method getCartById
   * @description Method to get a Cart by id
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} The cart details
   */
  static async getCartById(req, res) {
    const { cartId } = req.params;
    try {
      const result = await models.Cart.findOne(cartId);
      if (!result) {
        return errorResponse(res, 404, 'Cart not found');
      }
      return successResponse(res, 200, 'Cart detail', result);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting cart');
    }
  }

  /**
   * @method getCartsByUserId
   * @description Method to get Carts by Userid
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} The cart details
   */
  static async getCartByUserId(req, res) {
    const { userId } = req.params;
    try {
      const result = await models.Cart.findAll({
        where: { user_id, userId }
      });
      if (!result) {
        return errorResponse(res, 404, 'No Cart found');
      }
      return successResponse(res, 200, 'User Carts detail', result);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting carts');
    }
  }
}
