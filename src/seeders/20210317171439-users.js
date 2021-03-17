'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: '1@1.com',
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Ken',
          lastName: 'Jung',
          email: '2@1.com',
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Boi',
          lastName: 'Tran',
          email: '3@1.com',
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
