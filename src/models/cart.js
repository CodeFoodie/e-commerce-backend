'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define('Carts', {
    user_id: DataTypes.INTEGER,
    user_email: DataTypes.STRING,
    items: DataTypes.TEXT,
    subtotal: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    shipping_address: DataTypes.STRING,
    receipt_url: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});

  Carts.associate = (models) => {
    Carts.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' });
  };
  return Carts;
};