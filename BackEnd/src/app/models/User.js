import Sequelize, { Model } from 'sequelize';

class User extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            cell: { type: Sequelize.STRING, primaryKey: true },
         },
         {
            sequelize,
         }
      );

      return this;
   }

   static associate(models) {
      this.hasMany(models.Check);
   }
}

export default User;
