import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingrediantsChanged = new EventEmitter<Ingredient[]>()
  constructor() { }

  
  ingredients: Ingredient[] = [
    new Ingredient('Tomatos', '10'),
    new Ingredient('Spinach', '5'),
    new Ingredient('Corriender', '15'),
    new Ingredient('spices', '2')
  ]
  
  getIngrediants(){
    return  this.ingredients.slice()
  }

  addIngrediants(ingredient : Ingredient){
      this.ingredients.push(ingredient)
      console.log("ingreds", this.ingredients)
      this.ingrediantsChanged.emit(this.ingredients.slice())
  }

  addIngredientsToShoppingList(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient)
    this.ingrediantsChanged.emit(this.ingredients.slice())
  }

  
}
