module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Vendors", {
    username: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    chargeType: DataTypes.STRING,           // food or cloth

    password: DataTypes.STRING
  })
}