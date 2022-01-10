'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    abstract: DataTypes.STRING,
    category: DataTypes.STRING,
    doc_file: DataTypes.BLOB,
    git_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};

// npx sequelize-cli model:generate --name Supervisor --attributes id:integer,supervisor_name:string,supervisor_email:string,dept:string