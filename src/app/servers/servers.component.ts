import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers : Server[] = [];
  constructor() { }

  ngOnInit(): void {

    let server : Server;

    for (let i=1; i <6; i++){
      server = new Server("Server #"+i, i);
      this.servers.push(server);
    }
  }

}
