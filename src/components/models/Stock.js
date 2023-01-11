const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stock extends Model { }

Stock.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amountOwned: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stock',
    }
);

module.exports = Stock;