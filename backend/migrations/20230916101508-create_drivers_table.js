'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      seasons_competed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      drivers_championship: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      race_entries: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      race_starts: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      pole_positions: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      race_wins: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      podium_fastest_laps: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      points: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Drivers');
  }
};
