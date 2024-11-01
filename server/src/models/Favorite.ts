import {DataTypes, Model} from 'sequelize';
import client from '../config/connection.js';
import User from './User.js';
import Recipe from './Recipe.js';


interface FavoriteAttribute {
    user_id: number;
    recipe_id: number
}

class Favorite extends Model<FavoriteAttribute> implements FavoriteAttribute {
    public user_id!: number;
    public recipe_id!: number;
}

Favorite.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Recipe,
                key: 'id',
            },
        },
    },
    {
        sequelize: client,
        tableName: 'favorites'
    }
);

export default Favorite;