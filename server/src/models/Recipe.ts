import {DataTypes, Model} from 'sequelize';
import client from '../config/connection.js';

interface RecipeAttributes {
    id: number;
    name: string;
    description: string;
}

class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
}

Recipe.init(
    {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
    },
    {
        sequelize: client,
        tableName: 'recipes',
    }
);

export default Recipe;