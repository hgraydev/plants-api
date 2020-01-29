module.exports = function(sequelize, Sequelize) {
    var plant = sequelize.define('plant', {
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
      return plant;
}
