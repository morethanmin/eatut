module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('ceoUser',{
        email:{
            type: DataTypes.STRING(40),
            allowNull: true,
            unique: true
        },
        username:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        

    },{
        timestamps:true,
    })
})