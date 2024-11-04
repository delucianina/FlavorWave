import { Router } from 'express';
import fetch from 'node-fetch';
// import axios from 'axios';
import { Recipe, Favorite } from '../../models/index.js';
import { isAuthenticated } from '../helpers/index.js';
const router = Router();
// Route to search for a recipe by ingredient
router.get('/recipes/search', isAuthenticated, async (req, res) => {
    const { ingredient } = req.query;
    const apiKey = process.env.API_NINJA_KEY;
    if (!ingredient) {
        res.status(400).json({ message: 'Ingredient is required' });
        return;
    }
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${ingredient}`, {
            headers: {
                'X-Api-Key': apiKey // Ensure you have this key in your .env file
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const recipes = await response.json();
        res.json(recipes);
    }
    catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ message: 'An error occurred while fetching recipes' });
    }
});
// Get user shops
// localhost:3333/api/shops/user
router.get('/recipes/user', isAuthenticated, async (req, res) => {
    const userRecipes = await Recipe.findAll({
        where: {
            user_id: req.user.id
        },
        order: [['id', 'ASC']]
    });
    res.json({ recipes: userRecipes });
});
// Get user favorite recipes
router.get('/favorites/user', isAuthenticated, async (req, res) => {
    try {
        const userFavorites = await Favorite.findAll({
            where: {
                user_id: req.user.id,
            },
            include: Recipe
        });
        res.json({
            favorites: userFavorites
        });
    }
    catch (error) {
        console.error('Error fetching user favorite recipes:', error);
        res.status(500).json({ error: 'Failed to fetch user favorite recipes' });
    }
});
// Create a recipe
// localhost:3333/api/shop
router.post('/recipes/create', isAuthenticated, async (req, res) => {
    try {
        await Recipe.create({
            ...req.body,
            // Never get the user's id from the client directly (ie. sending a user id through the req.body json object)
            user_id: req.user.id
        });
        res.json({
            message: 'Recipe created successfully!'
        });
    }
    catch (error) {
        console.log('create recipe error', error);
        res.status(500).json({
            message: 'There was a problem creating the recipe'
        });
    }
});
// Add a favorite (Matt I added this code to add a favorite but it kept giving me an error)
router.post('/favorites', isAuthenticated, async (req, res) => {
    try {
        const recipe = await Recipe.create({
            name: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            user_id: req.user.id
        });
        await Favorite.create({
            recipe_id: recipe.id,
            user_id: req.user.id,
        });
        res.json({
            message: 'Favorite created successfully!'
        });
    }
    catch (error) {
        console.log('create favorite error', error);
        res.status(500).json({
            message: 'There was a problem creating the favorite'
        });
    }
    // const { recipe_id } = req.body;
    // if (!recipe_id) {
    //   res.status(400).json({ error: 'Recipe ID is required'});
    //   return;
    // }
    // try {
    //   const favorite = await Favorite.create({
    //     recipe_id,
    //     user_id: req.user.id
    //   });
    //   res.status(201).json({favorite});
    // } catch (error) {
    //   console.error('Error adding favorite:', error);
    //   res.status(500).json({ error: 'An error ocurred while adding favorite'});
    // }
});
// Search recipe (using API Ninja with an ingredient)
export default router;
