'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    image_url: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});

  return product;
};