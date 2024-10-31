import client from '../config/connection.js';
import User from './User.js';
import Recipe from './Recipe.js';
import Ingredient from './Ingredient.js'

User.hasMany(Recipe, { foreignKey: 'user_id'});
Recipe.belongsTo(User, {foreignKey: 'user_id'});

Recipe.hasMany()






export {client, User, Recipe, Ingredient}