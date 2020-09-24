import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId : number;
  serverName : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.serverId = this.route.snapshot.params["id"];
    this.serverName = this.route.snapshot.params["name"];
  }

}
