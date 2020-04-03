import Sequelize, { Model } from 'sequelize';

class Check extends Model {
   static init(sequelize) {
      super.init(
         {
            date: Sequelize.STRING,
            longitude: Sequelize.STRING,
            latitude: Sequelize.STRING,
            distance: Sequelize.STRING,
         },
         {
            sequelize,
         }
      );

      return this;
   }

   static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_cell' });
   }
}

export default Check;
