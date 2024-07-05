const { DataTypes } = require("sequelize");
const db = require("..");
const Publisher = require("./Publisher");
const  Category = require("./Category");
const Author = require("./Author");

const Book = db.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    subTitle:{
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    isbnNumber:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique:true
    },
    pages:{
      type:DataTypes.SMALLINT,
      allowNull:false
    },
lang:{
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    translated:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
    },
    prevLang:{
      type:DataTypes.STRING(50),
      allowNull:true
    },
    yearPublished:{
      type:DataTypes.SMALLINT,
      allowNull:false
    },
   
  },
  {
    tableName: "books",
    timestamps: true,
  }
);

Publisher.hasMany(Book,{foreignKey:"publisherId"});
Book.belongsTo(Publisher,{foreignKey:"publisherId"})

Category.hasMany(Book,{foreignKey:"categoryId"});
Book.belongsTo(Category,{foreignKey:"categoryId"})

Book.belongsToMany(Author,{through:"booksAuthors"})
Author.belongsToMany(Book,{through:"booksAuthors"})
module.exports = Book;
