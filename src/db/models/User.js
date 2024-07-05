const { DataTypes } = require("sequelize");
const db = require("..");
// const bcrypt = require("bcryptjs");my way

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("librarian", "admin", "superAdmin"),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    // hooks: {
    //   beforeCreate: async (user) => {
    //     const salt = await bcrypt.genSalt(10);
    //     user.password = await bcrypt.hash(user.password, salt);
    //   },
    //   beforeUpdate: async (user) => {
    //     if (user.changed("password")) {
    //       const salt = await bcrypt.genSalt(10);
    //       user.password = await bcrypt.hash(user.password, salt);
    //     }
    //   },
    // },myway
  }
);

module.exports = User;
