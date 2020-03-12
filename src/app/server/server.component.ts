import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  serverName : string
  serverContent :  string

  serverElements = []

  addServerName(){
    this.serverElements.push({
      name: this.serverName,
      content: this.serverContent,
    })
  }
  ngOnInit() {
  }

}
