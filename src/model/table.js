module.exports = (sequelize, DataTypes) => {
  return sequelize.define("table", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    xid: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
    },
    yid: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
    },
    dataid: {
      type: DataTypes.STRING(255),
      primaryKey: false,
      allowNull: false,
    },
  });
};
