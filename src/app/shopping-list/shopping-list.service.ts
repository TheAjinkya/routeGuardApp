import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingrediantsChanged = new Subject<Ingredient[]>()

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
      this.ingrediantsChanged.next(this.ingredients.slice())
  }

  addIngredientsToShoppingList(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient)
    this.ingrediantsChanged.next(this.ingredients.slice())
  }

  
}
