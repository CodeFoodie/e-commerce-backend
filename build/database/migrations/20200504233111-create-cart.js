'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      items: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.INTEGER
      },
      shipping: {
        type: Sequelize.BOOLEAN
      },
      total: {
        type: Sequelize.INTEGER
      },
      shipping_address: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Carts');
  }
};
//# sourceMappingURL=20200504233111-create-cart.js.map