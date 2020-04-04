import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

 @Output() featureSelected = new EventEmitter<string>()

 @ViewChild('buttonName', {static:true}) menuName : ElementRef

  onSelect(feature:string){
    console.log("onSelect Clicked", feature)
    this.featureSelected.emit(feature)
  }

  ngOnInit() {
    this.featureSelected.emit("Child Started")
  }
  ngAfterViewInit(){
    console.log(" this.menuName.nativeElement.contentName",  this.menuName.nativeElement.textContent)
   
  }

}
