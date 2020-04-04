import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]
  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngrediants()

    this.shoppingListService.ingrediantsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        console.log("new Ingreds", ingredients)
        this.ingredients = ingredients
      }
    )
  } 

}
