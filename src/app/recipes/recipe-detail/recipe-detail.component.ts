import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {


  recipe : Recipe
  ingredients : Ingredient[]
  constructor(private recipeSrc : RecipeService, private route : ActivatedRoute, 
    private router : Router) { }
  id:number
  ngOnInit() {

    // const id = this.route.snapshot.params['id']
    this.route.params.subscribe((params : Params)=>{
      this.id =+ params['id']
      this.recipe = this.recipeSrc.getRecipe(this.id)
    })
    console.log("id: ",this.id)
    
  }

  onAddToShoppingList(recipe : Recipe){
    console.log("Ingredients Obj", recipe)
    this.recipeSrc.addIngredientsToShoppingList(recipe.ingredients)
  }

  routeToEditRecipe(recipe : Recipe){
    console.log("recipe", recipe)
    this.router.navigate(['./edit'], {relativeTo : this.route})
  }

}
