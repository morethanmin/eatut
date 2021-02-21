const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('store',{
        name:{
            type: DataTypes.STRING(40)
        },
        type:{
            type: DataTypes.STRING(15)
        }
    },{
        timestamps:true
    })
})