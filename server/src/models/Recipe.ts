import {DataTypes, Model} from 'sequelize';
import client from '../config/connection.js';

interface RecipeAttributes {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
    user_id?: number;
}

class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    public id!: number;
    public name!: string;
    public ingredients!: string;
    public instructions!: string;
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
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize: client,
        tableName: 'recipes',
    }
);

export default Recipe;