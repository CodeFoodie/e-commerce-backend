'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    items: DataTypes.STRING,
    subtotal: DataTypes.INTEGER,
    shipping: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
    shipping_address: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  return Cart;
};