import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
class Ingredients extends Model {
}
Ingredients.init({
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
    tableName: 'ingredients',
});
export default Ingredients;
