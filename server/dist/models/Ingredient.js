import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
class Ingredient extends Model {
}
Ingredient.init({
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: client,
    tableName: 'ingredient',
});
export default Ingredient;
