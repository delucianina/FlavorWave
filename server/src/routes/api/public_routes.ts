import { Router, Request, Response } from 'express';
import {  Recipe, User, Favorite } from '../../models/index.js';

const router = Router();

router.get('/recipes', async (_, res: Response) => {
    try {

      const recipes = await Recipe.findAll({
        include: [
          {
            model: Favorite,
            attributes: ['user_id']
          },
          {
            model: User,
            attributes: ['username', 'email']
          }
        ]
      });
  
      res.json({ recipes });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }
  });
  
  // Get Favorites for a recipe 
  router.get('/favorites', async (req: Request, res: Response) => {
    try {
        const favorites = await Favorite.findAll({
            include: {
              model: User,
              attributes: ['username']
            },
            where: {
              recipe_id: req.body.recipe_id
            }
          });
        
          res.json({favorites});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching recipes' });
      }
  });
  
  export default router;