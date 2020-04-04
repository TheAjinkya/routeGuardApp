import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipe :Recipe;
 @Input() index :number;

  // constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    // console.log("Recipe", this.recipe)
  }

  // onSelected(){
  //   console.log("Selected", this.recipe)
  //     // this.recipeSelected.emit()
  //     this.recipeService.recipeSelected.emit(this.recipe)
  // }

}
