module.exports = function(sequelize, Sequelize) {
// account
    var account = sequelize.define('account', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            validate: {
              isEmail: {
                msg: 'It is not a valid email.'
              },
            },
            unique: {
              msg: 'This email is already taken.'
            }
        },
        password: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true,
            len: [8,15]
        },
        status: {
          type: Sequelize.ENUM('Active', 'Inactive'),
          defaultValue: 'Inactive'
        }
    }
  );
      return account;
}
