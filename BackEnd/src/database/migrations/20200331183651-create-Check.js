module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('checks', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
         },
         user_cell: {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'cell' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
         },
         date: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         longitude: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         latitude: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         distance: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         created_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },
      });
   },

   down: (queryInterface) => {
      return queryInterface.dropTable('checks');
   },
};
