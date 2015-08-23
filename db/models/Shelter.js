module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Shelters", {
    username: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: DataTypes.STRING
  })
}