import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { error } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Token : string = null

  constructor(private router : Router, private route: ActivatedRoute) { }

  apiresponse : [any]

  signUpUser(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response=>{
      console.log("response", response)
      alert("user crated successfully")
      firebase.auth().currentUser.getIdToken().then(
        (token: string)=>{
          this.Token = token
          console.log("token", this.Token)
          this.router.navigate(['../'], {relativeTo: this.route})
        }
      )
    }
    )
    .catch(
      error=>{
        console.log(error)
        alert(error.message)
      }
    )
  }

  signInUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response=>{
      console.log("response", response)
      alert("user logged in successfully")
      firebase.auth().currentUser.getIdToken().then(
        (token: string)=>{
          this.Token = token
          console.log("token", this.Token)
          this.router.navigate(['../'], {relativeTo: this.route})
        }
      )
    }
    )
    .catch(
      error=>{
        console.log(error)
        alert(error.message)
      }
    )
  }
  
  getToken(){
    // return  firebase.auth().currentUser.getIdToken()
    firebase.auth().currentUser.getIdToken().then(
      (token: string)=>{
        console.log("token", token)
        this.Token = token
      }
    )
    return this.Token
  }
  
  isAuthenticated(){
    return this.Token != null
  }

  logout(){
      firebase.auth().signOut()
      this.Token = null
  }

}
