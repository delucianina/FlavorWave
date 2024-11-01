import {faker} from '@faker-js/faker';

import {client} from '../models/index.js';
import {User, Recipe, Favorite} from '../models/index.js';

// Recreate all of the tables, using our models - erases all previous data
await client.sync({force: true});

async function seedUsers() {
  const userData: any[] = [];
  let amount = 10;
  
  while (amount--) {
    const username = faker.person.firstName().toLowerCase()

    userData.push({
      username: username,
      email: `${username}@test.com`,
      password: 'password123',
    });
  }

  // @ts-ignore
  await User.bulkCreate(userData);
}

async function seedRecipes() {
  const users = await User.findAll();
  const recipeData = [];
  let amount = 15;

  while(amount--) {
    const randomUser = users[Math.floor(Math.random() * users.length)];

    recipeData.push({
      name: faker.food.dish() + ' Recipe',
      ingredients: faker.food.ingredient(),
      instructions: 'Mix it together and good luck',
      user_id: randomUser.id
    });
  }

  // @ts-ignore
  await Recipe.bulkCreate(recipeData);
}

async function seedFavorites() {
  const recipes = await Recipe.findAll();
  const users = await User.findAll();
  const favoriteData = [];
  let amount = 30;

  while(amount--) {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];

    favoriteData.push({
      recipe_id: randomRecipe.id,
      // @ts-ignore
      user_id: randomUser.id
    });
  }

  // @ts-ignore
  await Favorite.bulkCreate(favoriteData);
}

  // @ts-ignore
  // A for of loop lets us run asynchronous code within the code block, whereas other loops (including forEach) do not


try {
  await seedUsers();
  await seedRecipes();
  await seedFavorites();

  console.log('Tables seeded successfully!');
} catch (error) {
  console.log('SEED ERROR', error);
}

process.exit();