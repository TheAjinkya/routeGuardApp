import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients : Ingredient[]
  private subscription: Subscription

  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngrediants()

   this.subscription =  this.shoppingListService.ingrediantsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        console.log("new Ingreds", ingredients)
        this.ingredients = ingredients
      }
    )
  } 
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
