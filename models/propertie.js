module.exports = function(sequelize, Sequelize) {
    var propertie = sequelize.define('propertie', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        status: {
          type: Sequelize.ENUM('Active', 'Inactive'),
          defaultValue: 'Inactive'
        }
    }
  );
      return propertie;
}
