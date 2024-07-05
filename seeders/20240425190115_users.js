'use strict';
const bcrypt=require('bcryptjs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', 
     [{
      firstName: 'John',
      lastName:"Doe",
      email:"johndoe@gamil.com",
      password:bcrypt.hashSync("123456",10),
      role:"superAdmin",
      
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
