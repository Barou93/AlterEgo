"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Article extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         models.Article.belongsTo(models.Admin, {
            foreignKey: {
               allowNull: false
            }
         });
      }
   }
   Article.init(
      {
         adminId: DataTypes.INTEGER,
         title: DataTypes.STRING,
         content: DataTypes.TEXT,
         image: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Article",
      }
   );
   return Article;
};
