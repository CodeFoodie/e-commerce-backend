'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    items: DataTypes.STRING,
    subtotal: DataTypes.INTEGER,
    shipping: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});

  return cart;
};