/* eslint-disable max-len */
/* eslint-disable camelcase */
import fs from 'fs';
import { status, successResponse, errorResponse } from '../utils/index';


/**
 * @class AboutUs
 * @description Controllers for Aboutus
 * @exports AboutUs
 */
export default class AboutUs {
  /**
   * @method addAboutUs
   * @description Method for modifying about us content
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async addAboutUs(req, res) {
    if (!req.user.is_admin) {
      return errorResponse(res, 401, 'You need admin privilegde');
    }

    try {
      fs.writeFileSync(`${__dirname}/aboutus.txt`, req.body.text);
      return successResponse(res, status.created, 'About us content updated successfully', req.body.text);
    } catch (error) {
      return errorResponse(res, status.error, 'Unable to modify about us content, please try again');
    }
  }

  /**
  * @method getAboutUs
  * @description Method to fetch About us content
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} About us details
  */
  static async getAboutUs(req, res) {
    try {
      const aboutUs = await fs.readFileSync(`${__dirname}/aboutus.txt`, 'utf8');
      return successResponse(res, 200, 'About us', aboutUs);
    } catch (error) {
      console.log(error);
      return errorResponse(res, 500, 'Error getting about us');
    }
  }
}
