module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define('UserCourse', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CourseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    approvalStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'usercourse', // nombre real de la tabla
  });

  UserCourse.associate = (models) => {
    UserCourse.belongsTo(models.Course, {
      foreignKey: 'CourseId',
      onDelete: 'CASCADE',
    });

    UserCourse.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE',
    });
    UserCourse.belongsTo(models.ApprovalStatus, {
      foreignKey: 'approvalStatusId',
      as: 'approvalStatus',
    });
  };

  return UserCourse;
};
