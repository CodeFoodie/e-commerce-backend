'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    state: DataTypes.STRING,
    local_government_area: DataTypes.STRING,
    address: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN
  }, {});
  
  Users.associate = (models) => {
    Users.hasMany(models.Cart, { as: 'carts', foreignKey: 'user_id' });
  };
  return Users;
};