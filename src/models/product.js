'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Products', {
    image_url: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});

  return Product;
};