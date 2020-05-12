'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    image_url: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  return Product;
};
//# sourceMappingURL=product.js.map