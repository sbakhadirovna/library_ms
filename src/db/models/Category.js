const { DataTypes } = require("sequelize");
const db = require("..");


const Category = db.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }
  },
  {
    tableName: "categories",
    timestamps: true,
  }
);

Category.hasMany(Category,{foreignKey:"categoryId"});
Category.belongsTo(Category,{foreignKey:"categoryId"})

module.exports = Category;
