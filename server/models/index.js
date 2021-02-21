'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const ceoUser = require('./ceoUser');
//현재 파일까지의 경로에서 현재파일의 이름 값 가져옴
const basename = path.basename(__filename);
// process.env.NODE_ENV 는 현재 환경에 따라 값이 달라짐 
const env = process.env.NODE_ENV || 'development';
// development config 가져오기
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

//config에 맞는 시퀄라이즈 생성하기

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Testing the connection
async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
test()
  

// 생성한 시퀄라이즈를 이용해 모델 가져오기.

 fs
   .readdirSync(__dirname)   //현재 경로의 파일 목록 표시
   .filter(file => {
     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
   })    // .js 확장자를 가진 파일만 필터링
   .forEach(file => {
     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
     db[model.name] = model;
   });   // 각각의 모델을 db에 넣음.

// 관계설정
//console.log(db.ceoUser)
db.ceoUser.hasMany(db.store);
db.store.belongsTo(db.ceoUser);

db.store.hasMany(db.menu);
db.menu.belongsTo(db.store);

db.store.hasOne(db.location);
db.location.belongsTo(db.store);
//

 Object.keys(db).forEach(modelName => {
    //console.dir(db[modelName])
   if (db[modelName].associate) {
     db[modelName].associate(db);
   }
 });

 db.sequelize = sequelize;
 db.Sequelize = Sequelize;



module.exports = db;
