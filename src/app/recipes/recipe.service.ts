import { Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService : ShoppingListService) { }

  recipeChanged = new Subject<Recipe[]>()


  recipes: Recipe[] = [
    new Recipe('Kabab Recipe', 'This is Kabab', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
    [new Ingredient('Kabab', '100')]),
    new Recipe('Fish Recipe', 'This is Fish recipe', 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/paneer-main-picture_0.jpg',
    [new Ingredient('Fish', '100')]),
    new Recipe('Chicken', 'This is Chicken', 'https://media.gettyimages.com/photos/the-chili-paneer-is-photographed-at-curry-leaf-october-26-2015-in-md-picture-id494781078?s=612x612', 
    [new Ingredient('Chicken', '100')]),
    new Recipe('Paneer', 'This is paneer', 'https://cdn.pixabay.com/photo/2015/04/27/20/06/salad-742569_960_720.jpg', 
    [new Ingredient('Paneer', '100')])

  ]

  getRecipes(){
    return this.recipes
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredientsToShoppingList(ingredients)
  }

  getRecipeById(index: number){
    return this.recipes[index]    
  }

  addRecipe(recipe: Recipe){
      this.recipes.push(recipe)
      this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe : Recipe){
      this.recipes[index] = newRecipe
      this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
      this.recipes.splice(index, 1)
      this.recipeChanged.next(this.recipes.slice())
  }
  
}
