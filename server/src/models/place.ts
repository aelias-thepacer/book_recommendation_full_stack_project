import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface PlaceAttributes {
    place_id : string;
    latitude: number;
    longitude: number;
    type: string;
}

interface PlaceCreationAttributes extends Optional<PlaceAttributes, 'place_id'> {}

export class Place extends Model<PlaceAttributes, PlaceCreationAttributes> implements PlaceAttributes {
    public place_id: string;
    public latitude: number;
    public longitude: number;
    public type: string;
}

export function PlaceFactory(sequelize: Sequelize): typeof Place {
    return sequelize.define<Place>('Place', {
        place_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}