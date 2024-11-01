import client from '../config/connection.js';
import User from './User.js';
import Recipe from './Recipe.js';
import Favorite from './Favorite.js';
// User and Recipe association
User.hasMany(Recipe, { foreignKey: 'user_id' });
Recipe.belongsTo(User, { foreignKey: 'user_id' });
// User and Favorite associations
User.hasMany(Favorite, { foreignKey: 'user_id' });
Favorite.belongsTo(User, { foreignKey: 'user_id' });
Recipe.hasMany(Favorite, { foreignKey: 'recipe_id' });
Favorite.belongsTo(Recipe, { foreignKey: 'recipe_id' });
export { client, User, Recipe, Favorite };
