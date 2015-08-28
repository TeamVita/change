module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Vendors", {
    username: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    vendorType: DataTypes.STRING,           // food or cloth

    password: DataTypes.STRING
  });
};
