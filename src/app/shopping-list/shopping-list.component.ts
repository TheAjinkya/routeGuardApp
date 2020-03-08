import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatos', '10'),
    new Ingredient('Spinach', '5'),
    new Ingredient('Corriender', '15'),
    new Ingredient('spices', '2')
  ] 
  constructor() { }

  ngOnInit() {
  }

}
