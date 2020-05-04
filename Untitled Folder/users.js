'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    state: DataTypes.STRING,
    local_government_area: DataTypes.STRING,
    address: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
  }, {});

  users.associate = (models) => {
    users.hasMany(models.requests, { as: 'cart', foreignKey: 'user_id' });
  };
  return users;
};
