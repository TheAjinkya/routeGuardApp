import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  title = 'routeGuardApp';
  loadedFeature : string 

  myFlag : boolean = true
  
  onNavigate(feature: string){
    this.loadedFeature = feature
  }
  
  ngOnInit(){
    this.loadedFeature= 'recipe'
    firebase.initializeApp({
      apiKey: "AIzaSyBHprKcwBgMaZuX0OczLpKs2YX3EHIo-XM",
      authDomain: "ng-recipe-book-73f3f.firebaseapp.com",
    })
  }
}
