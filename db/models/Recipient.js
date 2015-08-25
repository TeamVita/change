module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Recipients", {
    food: DataTypes.DECIMAL(10, 2),

    clothing: DataTypes.DECIMAL(10, 2),

    password: DataTypes.STRING,

    // pin: DataTypes.INTEGER
    pin: DataTypes.STRING
  })
}