import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingrediantsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()

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

  getSelectedIngredient(id : number){
    return this.ingredients[id]
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

  updateIngredients(index : number, newIngredient : Ingredient){
      this.ingredients[index] = newIngredient
      this.ingrediantsChanged.next(this.ingredients.slice())
  }
    

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1)
    console.log("After Deleting ingredients", this.ingredients)
    this.ingrediantsChanged.next(this.ingredients.slice())
  }


  
}
