module.exports = {
  async up(queryInterface) {
    const roles = [
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'ReadOnly',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Role', roles);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Role', null, {});
  },
};
