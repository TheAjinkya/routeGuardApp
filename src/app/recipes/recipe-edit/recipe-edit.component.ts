import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormsModule }  from '@angular/forms'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route : ActivatedRoute, private recipeSrc : RecipeService,
    private router: Router, private slSrc : ShoppingListService) { }
  id : number
  editMode = false
  selectedRecipe : Recipe
  recipeEditForm : FormGroup



  ngOnInit() {
    
    this.route.params.subscribe((params:Params)=>{
        this.id =+ params['id']
        this.editMode = params['id'] != null
        console.log("editMode, index", this.editMode, this.id)
        this.initForm()
        
      })
  }

  onSubmit(){

    const newRecipe = new Recipe(this.recipeEditForm.value['name'],
     this.recipeEditForm.value['description'], this.recipeEditForm.value['imagePath'], this.recipeEditForm.value['ingredients'])
    if (this.editMode) {
      this.recipeSrc.updateRecipe(this.id, newRecipe)
      this.onCancel()
    }else{
      this.recipeSrc.addRecipe(newRecipe)
      this.onCancel()
    }
    console.log(this.recipeEditForm.value)
  }

  onAddIngredient(){
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
       new FormGroup({
         'name': new FormControl(null,Validators.required),
         'amount' : new FormControl(null, Validators.pattern("^[1-9]+[0-9]*$")) 
       })
    )
  }

  deleteRecipe(){
    this.recipeSrc.deleteRecipe(this.id)
  }

  onCancel(){
      this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index)
    console.log("Ingredient Index", index)
  }
  
  private initForm(){
    let recipeName = ''
    let recipeImage=''
    let recipeDescription=''
    let recipeIngredients = new FormArray([])
    if(this.editMode){
      this.selectedRecipe = this.recipeSrc.getRecipeById(this.id)
        recipeName =   this.selectedRecipe.name
        recipeImage = this.selectedRecipe.imagePath
        recipeDescription = this.selectedRecipe.description
        
        if (this.selectedRecipe['ingredients']) {
          for(let ingredient of this.selectedRecipe.ingredients){
              recipeIngredients.push(
                new FormGroup({
                    'name' : new FormControl(ingredient.name),
                    'amount' : new FormControl(ingredient.amount)
                  })
              )
          }
        }
      }
        this.recipeEditForm = new FormGroup(
          {
            'name' : new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImage,Validators.required),
            'description' : new FormControl(recipeDescription, Validators.required),
            'ingredients' : recipeIngredients 
          }
        )
  }

}
