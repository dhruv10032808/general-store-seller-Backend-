const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Item=sequelize.define('items',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    dish:{
        type:Sequelize.STRING,
        allowNull:false
    },
    tables:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
})

module.exports=Item;