'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  
            queryInterface.addColumn(
              'Variants',
              'description',
              {
                type: Sequelize.TEXT('long'),
                allowNull: true,
              },
              ),
            queryInterface.addColumn(
              'Variants',
              'inventory',
              {
                type: Sequelize.INTEGER,
                allowNull: true,
              },
            )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     queryInterface.removeColumn('Variants', 'description'),
     queryInterface.removeColumn('Variants', 'inventory')
  }
};
