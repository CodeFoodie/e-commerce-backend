'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        image_url: 'assets/img/categori/product1.png',
        is_available: true,
        price: 1000,
        description: 'Comfy Shorts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product2.png',
        is_available: true,
        price: 26500,
        description: 'Green Dress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product2.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product3.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly Heat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product1.png',
        is_available: true,
        price: 26500,
        description: 'Baby Prickly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product2.png',
        is_available: true,
        price: 26500,
        description: 'Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product3.png',
        is_available: true,
        price: 26500,
        description: 'Prickly Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product1.png',
        is_available: true,
        price: 26500,
        description: 'Heat Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product2.png',
        is_available: true,
        price: 26500,
        description: 'Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product3.png',
        is_available: true,
        price: 26500,
        description: 'Baby-Prickly-Heat-Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url: 'assets/img/categori/product1.png',
        is_available: true,
        price: 26500,
        description: 'Baby_Prickly_Heat_Powder',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
