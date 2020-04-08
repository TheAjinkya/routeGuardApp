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

  onSave(form : NgForm){
      console.log("Form Value", form.form.value)
      // this.shoppingListService.ingredients.push({name : a, amount : b})
      this.shoppingListService.addIngrediants({name : form.form.value.name, amount: form.form.value.amount})
  }
  onDelete(){
    this.shoppingListService.ingredients.pop()
  }

  onReset(ingForm : NgForm){
    ingForm.reset()
  }

}
