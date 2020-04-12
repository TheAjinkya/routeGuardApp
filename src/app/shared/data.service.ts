import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private rspSrc : RecipeService, private http : HttpClient,
              private authSrc : AuthService) { }

  getData(){

     const token = this.authSrc.getToken()
    return this.http.get('https://ng-recipe-book-73f3f.firebaseio.com/recipes.json?auth=' + token).subscribe(
      (response)=>{
        this.rspSrc.setRecipes(response)
        console.log(response)
      },
      error=>{
      console.log(error)
      }
    )
  }

  saveData(){
      const dataObject = this.rspSrc.getRecipes()    
      const token = this.authSrc.getToken()
      return this.http.post('https://ng-recipe-book-73f3f.firebaseio.com/recipes.json?auth='+token, dataObject )
  }

}
