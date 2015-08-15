module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Donations", {
    amount: DataTypes.DECIMAL(10, 2)
  })
}