module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Donors", {
    email: DataTypes.STRING,

    username: DataTypes.STRING,
    
    password: DataTypes.STRING,

    firstName: DataTypes.STRING,

    lastName: DataTypes.STRING,

    fbId: DataTypes.STRING,

    totalDonations: DataTypes.DECIMAL(10, 2),

    profileImage: {
      type: DataTypes.STRING
      // defaultValue: '/img/placeholder.jpg'
    },

    achievments: DataTypes.INTEGER,

    score: DataTypes.INTEGER
  })
}