const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ Event, LocationPhoto }) {
      Location.hasMany(Event)
      Location.hasMany(LocationPhoto)
    }
  }
  Location.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
      },
      coordX: {
        type: DataTypes.FLOAT,
      },
      coordY: {
        type: DataTypes.FLOAT,
      },
      openingHours: {
        type: DataTypes.TEXT,
      },
      site: {
        type: DataTypes.TEXT,
      },
      vk: {
        type: DataTypes.TEXT,
      },
      fb: {
        type: DataTypes.TEXT,
      },
      instagram: {
        type: DataTypes.TEXT,
      },
      whatsapp: {
        type: DataTypes.TEXT,
      },
      telegram: {
        type: DataTypes.TEXT,
      },
      viber: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.TEXT,
      },
      tel1: {
        type: DataTypes.TEXT,
      },
      tel2: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Location',
    },
  )
  return Location
}
