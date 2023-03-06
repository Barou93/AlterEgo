"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Admin extends Model {
      static associate(models) {
         // define association here
         models.Admin.hasMany(models.Article);
      }
   }
   Admin.init(
      {
         username: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Admin",
      }
   );
   return Admin;
};
