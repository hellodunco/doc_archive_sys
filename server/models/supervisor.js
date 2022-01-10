'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supervisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Supervisor.init({
    id: DataTypes.INTEGER,
    supervisor_name: DataTypes.STRING,
    supervisor_email: DataTypes.STRING,
    dept: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supervisor',
  });
  return Supervisor;
};