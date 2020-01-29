var Sequelize = require("sequelize");
var sequelize = new Sequelize('example', 'root', 'root', {
  host: 'localhost',
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
db.account  = require('./account.js')(sequelize, Sequelize);
// db.company  = require('./company.js')(sequelize, Sequelize);
//
// db.account.hasMany(db.company, { foreignKey: 'account_id', sourceKey: 'uuid'});
// db.company.belongsTo(db.account, { foreignKey: 'account_id', targetKey: 'uuid'});
module.exports = db;
