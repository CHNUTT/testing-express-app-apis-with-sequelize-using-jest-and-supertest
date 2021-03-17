'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      {
        title: 'Moped',
        link: 'https://detroitmopedworks.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'iPad Mini',
        link: 'https://apple.com/ipad-mini',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Electronic Scooter',
        link: 'https://swagtron.com/electric-scooter',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Monitor',
        link: 'https://www.asus.com/us/Monitors/MB168B',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Items', null, {});
  },
};
