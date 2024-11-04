export interface User {
    id: number;
    username: string;
    email: string;
    password?: string;
    Recipes?: Recipe[];
    Favorites?: Favorite[];
}

export interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
    user_id?: number;
}

export interface Favorite {
    user_id: number;
    recipe_id: number;
    Recipe: Recipe;
}