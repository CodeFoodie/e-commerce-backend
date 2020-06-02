'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'torsami77@hotmail.com',
      mobile_number: '08037367767',
      first_name: 'Sami',
      last_name: 'Sami',
      state: 'Plateau',
      local_government_area: 'Jos North',
      address: 'Behind Nitel',
      is_verified: true,
      is_admin: true,
      password: '$2y$10$jDdpsXEZpxjddQblC387Iu8jXYRHkqyS4BVQTKLU5iCxpV4rJgbyK',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
