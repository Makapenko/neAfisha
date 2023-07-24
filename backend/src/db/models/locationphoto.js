const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LocationPhoto extends Model {
    static associate({ Location }) {
      LocationPhoto.belongsTo(Location)
    }
  }
  LocationPhoto.init(
    {
      LocationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Location',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      url: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'LocationPhoto',
    },
  )
  return LocationPhoto
}
