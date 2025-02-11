import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface PlaceAttributes {
    place_id: string;
    name: string;
    formatted_address: string;

}

interface PlaceCreationAttributes extends Optional<PlaceAttributes, 'place_id'> {}

export class Place extends Model<PlaceAttributes, PlaceCreationAttributes> implements PlaceAttributes {
    place_id!: string;
    name!: string;
    formatted_address!: string;
}

export function PlaceFactory(sequelize: Sequelize): typeof Place {
  Place.init(
    {
      place_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      formatted_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'Place',
      sequelize,
    }
  );

  return Place;
}
