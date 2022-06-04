'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('requests', { id: Sequelize.INTEGER })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('requests')
  }
}
