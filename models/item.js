const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Item=sequelize.define('items',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    item:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=Item;