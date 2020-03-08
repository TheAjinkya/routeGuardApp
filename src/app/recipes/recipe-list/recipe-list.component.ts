import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Kabab Recipe', 'This is Kabab', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Fish Recipe', 'This is Fish recipe', 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/paneer-main-picture_0.jpg'),
    new Recipe('Chicken', 'This is Chicken', 'https://media.gettyimages.com/photos/the-chili-paneer-is-photographed-at-curry-leaf-october-26-2015-in-md-picture-id494781078?s=612x612'),
    new Recipe('Paneer', 'This is paneer', 'https://cdn.pixabay.com/photo/2015/04/27/20/06/salad-742569_960_720.jpg')

  ]
  constructor() { }

  ngOnInit() {
  }

}
