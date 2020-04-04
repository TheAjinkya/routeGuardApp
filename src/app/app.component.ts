import { Component, ViewEncapsulation, OnInit } from '@angular/core';

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
  }
}
