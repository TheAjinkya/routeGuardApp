import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor( private shoppingListService : ShoppingListService) { }
  private subscription : Subscription 
  editMode:boolean = false
  editedItemIndex : number
  selectedIngredient : Ingredient
  @ViewChild('ingForm', {static: true}) slForm : NgForm

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      response=>{
          this.editedItemIndex = response
          this.editMode = true
          console.log("Edited Item Index", this.editedItemIndex)
          this.selectedIngredient = this.shoppingListService.getSelectedIngredient(this.editedItemIndex)
          console.log("selectedIngredient", this.selectedIngredient)
          this.slForm.setValue({
            name : this.selectedIngredient.name,
            amount : this.selectedIngredient.amount
          })
          
      },
      error=>{
          console.log(error)
      }
    )
  
  }

  onSave(form : NgForm){
      console.log("Form Value", form.form.value)
      // this.shoppingListService.ingredients.push({name : a, amount : b})
      const newIngredient = new Ingredient(form.form.value.name, form.form.value.value)
      if (this.editMode) {
        this.shoppingListService.updateIngredients(this.editedItemIndex, newIngredient)
      }else{
        
        this.shoppingListService.addIngrediants({name : form.form.value.name, amount: form.form.value.amount})
       }
    }
  onDelete(){
    this.shoppingListService.ingredients.splice(this.editedItemIndex, 1)
  }

  onReset(ingForm : NgForm){
    ingForm.reset()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
