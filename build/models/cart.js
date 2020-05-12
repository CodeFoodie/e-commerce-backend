'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    items: DataTypes.STRING,
    subtotal: DataTypes.INTEGER,
    shipping: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  return Cart;
};
//# sourceMappingURL=cart.js.map