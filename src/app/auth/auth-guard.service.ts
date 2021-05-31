import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private authSrc : AuthService) { }
  canActivate(route : ActivatedRouteSnapshot, state :  RouterStateSnapshot){
    if(this.authSrc.isAuthenticated()){
      return true
    } else{
      alert("Youre not authorised to visit it. SignIn first!")
      return false;
    } 
  }

}
