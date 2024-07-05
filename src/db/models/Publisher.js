const { DataTypes } = require("sequelize");
const db = require("..");

const Publisher = db.define(
  "publisher",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    tableName: "publishers",
    timestamps: true,
  }
);

module.exports = Publisher;
