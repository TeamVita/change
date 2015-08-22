module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Recipients", {
    firstName: DataTypes.STRING,

    lastName: DataTypes.STRING,

    food: DataTypes.DECIMAL(10, 2),

    cloth: DataTypes.DECIMAL(10, 2),

    pin: DataTypes.INTEGER
  })
}