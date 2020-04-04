import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onSave(a,b){
      console.log("formName", a, b)
      // this.shoppingListService.ingredients.push({name : a, amount : b})
      this.shoppingListService.addIngrediants({name : a, amount: b})
  }
  onDelete(){
    this.shoppingListService.ingredients.pop()
  }

  onReset(ingForm : NgForm){
    ingForm.reset()
  }

}
