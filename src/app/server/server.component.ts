import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit, OnChanges,
 DoCheck, AfterViewInit, AfterViewChecked,
AfterContentInit, AfterContentChecked {

  constructor() { 
  console.log("Constructor is called")
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes detected ", changes)
  }

  ngOnInit() {
    console.log("ngOnInit is called")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called")

  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is called")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called")
  }
  serverName: string
  serverContent: string

  serverElements = []

  addServerName() {
    this.serverElements.push({
      name: this.serverName,
      content: this.serverContent,
    })
  }

  addServerContent() {

  }

}
