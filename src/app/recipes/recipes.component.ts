import { Component, OnInit, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentChecked } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  selectedRecipe: Recipe;

  // @Output() recipeWasSelected = new EventEmitter()
  constructor(private recipeService : RecipeService) {
    console.log("constructor is called")
   }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe((recipe : Recipe)=>{
      this.selectedRecipe = recipe
    })
    console.log("ngOnInit is called")
  }
  
  ngOnChanges(){
    console.log("ngOnChanges is called")
  }

  ngDoCheck(){
    console.log("Docheck")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
