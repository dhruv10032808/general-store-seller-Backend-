const Sequelize=require('sequelize');

const sequelize=new Sequelize('candy-store','root','Dhruv@2808',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;