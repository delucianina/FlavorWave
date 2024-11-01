import {Router, Request, Response} from 'express';
import { Recipe, Favorite } from '../../models/index.js';
import { isAuthenticated } from '../helpers/index.js';

const router = Router();

// Get user shops
// localhost:3333/api/shops/user
router.get('/recipes', isAuthenticated, async(req: Request, res: Response) => {
  const userRecipes = await Recipe.findAll({
    where: {
      user_id: req.user.id  
    }
  });

  res.json(userRecipes);
});

router.get('/favorites', isAuthenticated, async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error('Error fetching user favorite recipes:', error);
    res.status(500).json({ error: 'Failed to fetch user favorite recipes' });
  }
});

// Create a shop
// localhost:3333/api/shop

export default router;