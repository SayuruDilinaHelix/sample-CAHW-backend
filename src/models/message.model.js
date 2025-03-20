const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Message = sequelize.define('Message', {   
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
message:{
    type:DataTypes.STRING,
    allowNull:false
}

});

module.exports=Message;