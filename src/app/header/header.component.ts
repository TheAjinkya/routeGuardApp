import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../shared/data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService : DataService,
    private authSrc : AuthService) { }

 @Output() featureSelected = new EventEmitter<string>()

 @ViewChild('buttonName', {static:true}) menuName : ElementRef

  onSelect(feature:string){
    console.log("onSelect Clicked", feature)
    this.featureSelected.emit(feature)
  }

  onSaveData(){
      this.dataService.saveData().subscribe(response=>{
        console.log("The Saved Data", response)
      },
      error =>{
        console.log(error)
      }
      )
  }

  onFetchData(){
      this.dataService.getData()
  }

  ngOnInit() {
    this.featureSelected.emit("Child Started")
  }
  ngAfterViewInit(){
    console.log(" this.menuName.nativeElement.contentName",  this.menuName.nativeElement.textContent)
   
  }

  onLogout(){
    this.authSrc.logout()
  }

}
