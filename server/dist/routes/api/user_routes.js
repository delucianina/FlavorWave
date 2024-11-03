import { Router } from 'express';
import { Recipe, Favorite } from '../../models/index.js';
import { isAuthenticated } from '../helpers/index.js';
const router = Router();
// interface isAuthenticated extends Request {
//   user?: {
//     id: number;
//   };
// }
// Get user shops
// localhost:3333/api/shops/user
router.get('/recipes', isAuthenticated, async (req, res) => {
    const userRecipes = await Recipe.findAll({
        where: {
            user_id: req.user.id
        }
    });
    res.json(userRecipes);
});
// Get user favorite recipes
router.get('/favorites', isAuthenticated, async (req, res) => {
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
// router.post('/favorites', isAuthenticated, async (req: Request, res: Response) => {
//   const { recipe_id } = req.body;
//   if (!recipe_id) {
//     return res.status(400).json({ error: 'Recipe ID is required'});
//   }
//   try {
//     const favorite = await Favorite.create({
//       recipe_id,
//       user_id: req.user.id
//     });
//     res.status(201).json({favorite});
//   } catch (error) {
//     console.error('Error adding favorite:', error);
//     res.status(500).json({ error: 'An error ocurred while adding favorite'});
//   }
// });
// Search recipe (using API Ninja with an ingredient)
export default router;
