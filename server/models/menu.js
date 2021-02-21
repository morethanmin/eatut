const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('menu',{
        name:{
            type: DataTypes.STRING(40),
        },
        price:{
            type: DataTypes.INTEGER,
        }
    },{
        timestamps:true
    })
})