'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        image_url: 'assets/img/stocks/item1.png',
        is_available: true,
        price: 1000,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item2.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item3.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item4.jpg',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item1.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item2.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item3.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item4.jpg',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item2.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item3.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/stocks/item4.jpg',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
