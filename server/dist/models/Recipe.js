import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
class Recipe extends Model {
}
Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: client,
    tableName: 'recipes',
});
export default Recipe;
