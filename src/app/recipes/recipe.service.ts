import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('Spicy Deviled Eggs', 'Hope you enjoy them as much as my friends and family!',
         'https://images.media-allrecipes.com/userphotos/560x315/330365.jpg', 
                    [ new Ingredient('Eggs', 10), new Ingredient('Mustar', 0.5), new Ingredient('Salt', 1)]),
         new Recipe('Japanese Deviled Eggs', 'Great twist on a old favorite.',
         'https://images.media-allrecipes.com/userphotos/560x315/1115452.jpg',
                    [ new Ingredient('Eggs', 9), new Ingredient('Mayonesse', 0.5), new Ingredient('Teaspoons', 2)]),
         new Recipe('Greek Deviled Eggs', 'Combining feta cheese, balsamic vinegar, and fresh basil is a winning recipe for some delicious deviled eggs!',
         'https://images.media-allrecipes.com/userphotos/560x315/1169728.jpg', 
                    [ new Ingredient('Eggs', 12), new Ingredient('Crumblet Feeta Cheesa', 1), new Ingredient('Tomato', 1)]),
         new Recipe('Classic Savory Deviled Eggs', 'Hard-cooked eggs are stuffed with a creamy blend of mayonnaise, Dijon mustard and rice wine vinegar.',
         'https://images.media-allrecipes.com/userphotos/560x315/3275386.jpg',
                    [ new Ingredient('Eggs', 6), new Ingredient('Dijon Mustard', 1), new Ingredient('Spring fresh dill', 12)]),
         new Recipe('Bacon Cheddar Deviled Eggs', 'These deviled eggs include bacon and shredded cheddar cheese. Better than your ordinary deviled eggs.',
         'https://images.media-allrecipes.com/userphotos/720x405/2237472.jpg', 
                    [ new Ingredient('Eggs', 12), new Ingredient('Slices of Bacon', 4), new Ingredient('Cheddar Cheese', 2)]),
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeById(id): Recipe {
        return this.recipes[id];
    }
}