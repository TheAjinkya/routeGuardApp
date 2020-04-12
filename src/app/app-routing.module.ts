import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {path:'', redirectTo : '/recipes', pathMatch:'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent, pathMatch : 'full' },
      { path: 'new', component: RecipeEditComponent, canActivate : [AuthGuardService] },
      { path: 'recipelist', component: RecipeListComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate : [AuthGuardService] }
    ]
  },
  {
    path: 'shoppingList', component: ShoppingListComponent,
    children: [
      { path: 'shoppingedit', component: ShoppingListService },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
