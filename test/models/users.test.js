import chai from 'chai';
import {
  sequelize, dataTypes, checkModelName, checkPropertyExists,
} from 'sequelize-test-helpers';

import UserModel from '../../src/models/users';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Test for user Model', () => {
  const User = UserModel(sequelize, dataTypes);
  const users = new User();

  checkModelName(User)('Users');

  context('properties', () => {
    ['email', 'mobile_number', 'first_name', 'last_name', 'is_verified', 'state', 'local_government_area', 'address'].forEach(checkPropertyExists(users));
  });
  context('associations', () => {
    const Cart = 'the users carts';

    before(() => {
      User.associate({ Cart });
    });

    it('defined a hasMany association with Requests', () => {
      expect(User.hasMany).to.have.been.calledWith(Cart, { as: 'carts', foreignKey: 'user_id' });
    });
  });
});
