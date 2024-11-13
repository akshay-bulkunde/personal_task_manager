'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Task extends Model {
    static associate(models) {
    }
  }
  Task.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      title: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      description: DataTypes.TEXT,
      priority: { 
        type: DataTypes.ENUM("low", "medium", "high"),
        allowNull: false 
      },
      dueDate: { 
        type: DataTypes.DATE, 
        allowNull: false 
      },
      status: { 
        type: DataTypes.ENUM("pending", "completed"),
        allowNull: false 
      },
      userId: { 
        type: DataTypes.INTEGER, 
        references: { model: "Users", key: "id" }, 
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      }
    },
    {
      sequelize,
      modelName: 'Task',
      timestamps:true
    }
  );
  return Task;
};
