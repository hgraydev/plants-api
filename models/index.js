var Sequelize = require("sequelize");
var sequelize = new Sequelize('Bayx8uBjgT','Bayx8uBjgT','Mb1faYLKL1', {
  host:'remotemysql.com',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//
// db.account  = require('./account.js')(sequelize, Sequelize);
db.plant  = require('./plant.js')(sequelize, Sequelize);
db.propertie  = require('./propertie.js')(sequelize, Sequelize);

db.plant.hasMany(db.propertie, { foreignKey: 'plant_id', sourceKey: 'uuid'});
db.propertie.belongsTo(db.plant, { foreignKey: 'plant_id', targetKey: 'uuid'});

// db.company  = require('./company.js')(sequelize, Sequelize);
//
// db.account.hasMany(db.company, { foreignKey: 'account_id', sourceKey: 'uuid'});
// db.company.belongsTo(db.account, { foreignKey: 'account_id', targetKey: 'uuid'});
module.exports = db;
