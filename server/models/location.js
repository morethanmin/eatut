const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('location',{
        latitude:{
            type: DataTypes.INTEGER,
        },
        longitude:{
            type: DataTypes.INTEGER,
        }
    },{
        timestamps:true
    })
})