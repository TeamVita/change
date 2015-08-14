module.exports = function(sequelize, DataTypes) {
  return sequelize.define("recipients", {
    firstName: DataTypes.STRING,

    lastName: DataTypes.STRING,

    totalAmount: DataTypes.DECIMAL(10, 2),

    pin: DataTypes.INTEGER
  })
}