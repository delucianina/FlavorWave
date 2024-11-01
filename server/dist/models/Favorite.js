import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
import User from './User.js';
import Recipe from './Recipe.js';
class Favorite extends Model {
}
Favorite.init({
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
}, {
    sequelize: client,
    tableName: 'favorites'
});
export default Favorite;
