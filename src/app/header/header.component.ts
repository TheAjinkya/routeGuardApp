import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

 @Output() featureSelected = new EventEmitter<string>()

  onSelect(feature:string){
    console.log("onSelect Clicked", feature)
    this.featureSelected.emit(feature)
  }

  ngOnInit() {
  }

}
