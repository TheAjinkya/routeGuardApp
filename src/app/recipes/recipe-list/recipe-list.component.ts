import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {


  recipes : Recipe[]
  showModal:boolean = false

  constructor(private recipeService : RecipeService, private router : Router, 
    private route : ActivatedRoute, private authSrc: AuthService) { }

  ngOnInit() {

    this.recipeService.recipeChanged.subscribe((recipes:Recipe[])=>{
      this.recipes = recipes
    })
    this.recipes = this.recipeService.getRecipes()
  }

  newRecipeForm(){
      if (this.authSrc.isAuthenticated()) {
        this.router.navigate(['new'], {relativeTo : this.route})
      } else {
        alert("Youre not authorised to Create it. SignIn first!")
        this.router.navigate(['signin'])
      }
  }


}
